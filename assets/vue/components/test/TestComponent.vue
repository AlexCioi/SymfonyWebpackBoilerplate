<script setup>

import TestService from "../../services/TestService";

const getSeats = () => {
    TestService
        .testFunction()
        .then((response) => {

        })
}

</script>

<template>

</template>

<style scoped>

</style>
