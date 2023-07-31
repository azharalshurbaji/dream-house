
<template>
  <v-container>
    <v-card>
      <v-card-title>{{ userData.displayName }}</v-card-title>
        <v-card-text>
          <p>Email: {{ userData.email }}</p>
          <p>Age: {{ userData.age }}</p>
          <p>Gender: {{ userData.gender }}</p>
        </v-card-text>
    </v-card>
  </v-container>
</template>
  
<script>
  export default {
    props: {
      userData: Object
  }
}
</script>
  

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


  const auth = getAuth() //from firebase/auth
signInWithEmailAndPassword(auth ,email, password)
  .then((userCredential) => {
  const user = userCredential.user
  // Fetch user data from Firebase
  firebase.firestore().collection('users').doc(user.uid).get()
    .then((doc) => {
  const userData = doc.data()
  // Pass user data as a prop to UserProfile component
    this.$router.push({ name: 'user-profile', params: { userData } })
  })
})


// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { ref } from "vue";

// const name = ref("")


// const user = auth.currentUser;
// const auth = getAuth(); //from firebase/auth


//   signInWithEmailAndPassword(auth ,displayName.value ,password.value) 
//     // const user = userCredential
//   .then( () => {
//     if (user) {
//       // The user object has basic properties such as display name, email, etc.
//       const name = user.displayName;
//       const email = user.email;
//       const photoURL = user.photoURL;
//       const emailVerified = user.emailVerified;
    
//       // The user's ID, unique to the Firebase project. Do NOT use
//       // this value to authenticate with your backend server, if
//       // you have one. Use User.getToken() instead.
//       const uid = user.uid;

//   }
// })


// if (user !== null) {
//   user.providerData.forEach((profile) => {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }

</script>

<style>

</style>