<template>
  <div>
    TEST CALCULATOR
    <div id="calculator">
      <button v-on:click="count++">You clicked me {{ count }} times.</button>
      <div id="calculator">
        <div class="container">
          <form action="">
            <h1>The Car-culator</h1>
            <p>Discover your monthly car payment</p>
            <label for="price">Purchase price</label>
            <input type="number" name="price" class="currency" v-model.number="price"/>
            <br />
            <label for="down-payment">Down payment</label>
            <input type="number" name="down-payment" class="currency" v-model.number="downPayment"/>
            <br />

            <label for="length">Term length</label>
            <select name="length" v-model="length">
              <option value="30">30 years</option>
              <option value="15">15 years</option>
            </select>

            <label for="rate">Rate</label>
            <input type="number" name="rate" v-model.number="rate"/>
          </form>
          <div>{{count}}, {{price}}, {{downPayment}}, {{length}}, {{rate}}</div>
          <div class="payment">{{ calcPayment }} / month</div>
        </div>
      </div>
    </div>
    <NewChart></NewChart>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
import NewChart from './NewChart';

export default {
  name: 'Calc',
  components: {
    NewChart
  },
  data: function () {
    return {
      count: 0,
      price: '',
      downPayment: '',
      rate: '',
      length: '',
      // calcPayment: 'Hello'
    }
  },
  computed: {
    calcPayment: function(e){
      let p = this.price - this.downPayment;
      let r = this.rate/1200;
      let l = this.length * 12;
      let i = Math.pow((1+r),l);
      let amt = (p * r * i)/(i - 1) || 0;
      return amt.toFixed(2) ;
    }
  }
};
</script>

<style>
</style>
