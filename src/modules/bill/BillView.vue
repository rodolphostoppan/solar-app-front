<template>
  <main>
    <modal-dialog
      text="Deseja cadastrar outra fatura?"
      :show="showModal"
      @addMore="addMoreBills"
      @action="addOneBill"
    />
    <h1>Fatura</h1>
    <p>Agora vamos cadastrar as faturas de energia do cliente:</p>
    <section>
      <uc-input name="UC" type="number" v-model="bill.uc" />
      <holder-input name="Titular" v-model="bill.holder" />
      <state-select name="Estado" :options="states" v-model="bill.location.state" />
      <city-select name="Cidade" :options="cities" v-model="bill.location.city" />
      <address-input name="Endereço" v-model="bill.location.address" />
      <amount-input
        name="Valor da fatura"
        type="number"
        unit="R$"
        unit-position="prefix"
        v-model="bill.amount"
      />
      <tariff-input name="Valor da tarifa" type="number" v-model="bill.tariff" />
      <consumption-input name="Consumo médio" type="number" v-model="bill.consumption" />
      <submit-bill name="CADASTRAR" @click="openModal" />
    </section>
  </main>
</template>

<script lang="ts">
import InputTextComponent from '@/components/input-text-component.vue'
import InputSelectComponent from '@/components/input-select-component.vue'
import Button from '@/components/button-component.vue'
import ModalDialogBill from '@/components/bill-modal-dialog.vue'
import { Bill } from './entities/bill'
import { BillService } from './services/bill.service'
import { inject } from 'vue'
import { HTTP_CLIENT, type HttpClient } from '@/infra/http/http'

export default {
  components: {
    UcInput: InputTextComponent,
    HolderInput: InputTextComponent,
    StateSelect: InputSelectComponent,
    CitySelect: InputSelectComponent,
    AddressInput: InputTextComponent,
    AmountInput: InputTextComponent,
    TariffInput: InputTextComponent,
    ConsumptionInput: InputTextComponent,
    SubmitBill: Button,
    ModalDialog: ModalDialogBill
  },
  data() {
    return {
      bill: new Bill(),
      billService: new BillService(inject(HTTP_CLIENT) as HttpClient),
      showModal: false,
      states: [
        { id: 1, item: 'pr' },
        { id: 3, item: 'SP' },
        { id: 4, item: 'RS' },
        { id: 5, item: 'SC' },
        { id: 6, item: 'MG' },
        { id: 7, item: 'RJ' },
        { id: 8, item: 'ES' },
        { id: 9, item: 'MT' }
      ],
      cities: [
        { id: 1, item: 'Maringá' },
        { id: 3, item: 'Londrina' },
        { id: 4, item: 'Curitiba' },
        { id: 5, item: 'Marialva' },
        { id: 6, item: 'Sarandi' },
        { id: 7, item: 'Colorado' },
        { id: 8, item: 'Santa Fé' },
        { id: 9, item: 'Paiçandu' }
      ]
    }
  },
  methods: {
    clearInputs() {
      this.bill.uc = 0
      this.bill.holder = ''
      this.bill.location.state = ''
      this.bill.location.city = ''
      this.bill.location.address = ''
      this.bill.amount = 0
      this.bill.tariff = 0
      this.bill.consumption = 0
    },
    openModal() {
      this.showModal = true
    },
    addMoreBills() {
      this.billService.save(this.bill).then(() => {
        this.showModal = false
        this.clearInputs()
      })
    },
    async addOneBill() {
      this.billService.save(this.bill).then(() => {
        this.$router.push({ name: 'project' })
        this.showModal = false
      })
    }
  }
}
</script>

<style scoped>
main {
  display: grid;

  padding: 4rem 3rem;
  gap: 2rem;

  > h1,
  p {
    text-align: center;
  }
}

section {
  display: grid;
  gap: 1rem;

  :last-child {
    margin-top: 7rem;
  }
}
</style>
