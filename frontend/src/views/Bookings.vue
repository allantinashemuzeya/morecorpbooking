<template>

  <div class="perspective">
    <HelloWorld msg="Bookings" />

    <Search/>
    <div class="bookings ">
      <WelcomeItem v-for="booking in bookings">
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>{{booking.topic}}</template>

        {{booking.reason}}

        <a v-text="moment(booking.start_time).format('MMMM Do YYYY, h:mm:ss a')"></a>
      </WelcomeItem>
    </div>

  </div>


</template>

<script setup>
  import WelcomeItem from '../components/WelcomeItem.vue'
  import DocumentationIcon from '../components/icons/IconDocumentation.vue'
  import moment from 'moment'
  import HelloWorld from '../components/HelloWorld.vue'
  import {useStore} from "../stores";
  import Search from '../components/Search.vue'
  import { storeToRefs } from 'pinia';


   const { fetchBookings } =  useStore()
   fetchBookings('')
   const { bookings } =  storeToRefs(useStore())
</script>

<style scoped>

.bookings{
  background:url('https://images.unsplash.com/photo-1517284938313-7b578da60a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBhbmQlMjBncmVlbnxlbnwwfHwwfHw%3D&w=1000&q=80');

  height: 600px;
  overflow: scroll;
  padding: 20px;

  border-right: 2px solid gray;
  border-top-right-radius: 34px;
  top: 19px;
}

.perspective{
  background:transparent;
  position: relative;
  width: 559px;
  height: 733px;
  transform-style: preserve-3d;
  transition: all 500ms ease-in;
  /* transform: rotateY(20deg) rotateX(60deg) rotateZ(-10deg); */
  transform: rotateY(0deg) rotateX(0deg) rotateZ(360deg) translate(-199px, -10px);
  box-shadow: -75px 80px 80px -10px rgb(0 0 0 / 70%);
  cursor: pointer;
  margin-right: 30px;
  display: inline-block;
  margin-left: 30%;
}

.item:hover{
  color: white;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  cursor: pointer;
}

</style>