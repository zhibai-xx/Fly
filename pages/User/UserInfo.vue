<template>
  <view>
    <Mean></Mean>
    <MyCardBtn></MyCardBtn>
    <view class="Masg">
      <p>会员: {{VipLevel}}</p>
      <hr>
      <p>认证: {{Authentication}}</p>
    </view>
    <edit></edit>
  </view>
</template>

<script>
  import Mean from '../../component/Mean.vue';
  import MyCardBtn from '../../component/mycardBtn.vue';
  import edit from './EditUser.vue'
  export default {
    components: {
      Mean,
      MyCardBtn,
      edit
    },
    data() {
      return {
        VipLevel:'超级会员',
        Authentication:'商家已认证'
      }
    },
    methods: {
      
    }
  }
</script>

<style>
.Masg{
margin-top: 0.8rem;
line-height: 2rem;
background-color: #FFFFFF;  
padding: 0.5rem 0.7rem;
font-size: 0.6rem;
}
.Masg p:nth-child(1){
  color: #FC6800;
  letter-spacing: 0.1rem;
}
.Masg p:nth-child(3){
  color: #9F9F9F;
  letter-spacing: 0.1rem;
}
</style>