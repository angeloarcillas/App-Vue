<template>
  <div class="p-4">
    <div class="p-4 bg-white shadow rounded">
      <h2 class="mb-4">Calculator</h2>
      <div class="calculator">
       <div class="display">{{ current }}</div>
       <span @click="clear">C</span>
       <span @click="sign">+/-</span>
       <span @click="percent">%</span>
       <span @click="append('/')" class="operator">/</span>
       <span @click="append(7)">7</span>
       <span @click="append(8)">8</span>
       <span @click="append(9)">9</span>
       <span @click="append('*')" class="operator">*</span>
       <span @click="append(4)">4</span>
       <span @click="append(5)">5</span>
       <span @click="append(6)">6</span>
       <span @click="append('-')" class="operator">-</span>
       <span @click="append(1)">1</span>
       <span @click="append(2)">2</span>
       <span @click="append(3)">3</span>
       <span @click="append('+')" class="operator">+</span>
       <span @click="append(0)" class="zero">0</span>
       <span @click="append('.')">.</span>
       <span @click="equal" class="operator">=</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      current: ''
    }
  },
  methods: {
    clear() {
        this.current = ''
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current)/100}`
    },
     append(number) {
    this.current += number.toString()
    },
    equal () {
        this.current = eval(this.current.toString())
    }
  }
}
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeath(4, 1fr);
  grid-template-rows: minmax(60px, auto);
  text-align: center;
}

.display {
  grid-column: 1/5;
  font-family: monospace;
  font-weight: bold;
  color: #fff;
 padding: 20px 15px 5px; 
  background-color: #333;
  text-align: right;
}

span {
 background-color: #f2f2f2;
 border: 1px solid #999;
 padding: 1rem;
 cursor: pointer;
}

span:active {
  background-color: #F50057;
}

.zero {
  grid-column: 1/3;
}

.operator {
  font-weight: bold;
  background-color: #F9A826;
  color: #fff;
}
</style>
