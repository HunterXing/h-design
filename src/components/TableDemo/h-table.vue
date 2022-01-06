<!--
 * @description: h-table
 * @Date: 2022-01-04 19:53:48
 * @LastEditTime: 2022-01-05 17:59:23
 * @Author: xingheng
-->
<template>
  <div class="h-table-wrap">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="th in columns" :key="th.dataSet">{{ th.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(td, index) in tableData" :key="index">
          <td v-for="key in tableKeys" :key="key" scope="row">{{ td[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "HTable",
  props: {
    tableData: { type: Array, default: () => [] },
    columns: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const tableKeys = computed(() => {
      return props.columns.map((column) => column.dataSet);
    });
    return {
      tableKeys,
    };
  },
});
</script>
