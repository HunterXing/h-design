<template>
  <h-row justify="left" gutter-v="5px">
    <h-col>
      <div class="grid-content bg-gray">span=4</div>
    </h-col>
    <h-col :span="8">
      <div class="grid-content bg-gray-drak">span=8</div>
    </h-col>
    <h-col :span="12">
      <div class="grid-content bg-gray">span=12</div>
    </h-col>
  </h-row>
  <h-row justify="left" gutter-v="5px">
    <h-col :span="12">
      <div class="grid-content bg-gray-drak">span=12</div>
    </h-col>
    <h-col :span="8">
      <div class="grid-content bg-gray">span=8</div>
    </h-col>
    <h-col>
      <div class="grid-content bg-gray-drak">4</div>
    </h-col>
  </h-row>
</template>

<script lang="ts" setup></script>
