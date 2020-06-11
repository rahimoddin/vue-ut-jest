<template>
    <div class="counter">
        <p class="count">{{count}}</p>
        <button class="inc" @click="count++">+</button>
        <button class="dec" @click="count--">-</button>
    </div>
</template>
<script>
export default {
    name: 'Counter',
    data() {
        return {
            count: 0
        }
    }
}
</script>