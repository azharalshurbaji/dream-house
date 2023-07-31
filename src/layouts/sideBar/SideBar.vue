<template>
    <v-app>
        <v-main>
            <router-view />
            <SideBarSection />
        </v-main>
    </v-app>
</template>

<script setup>
import SideBarSection from '@/layouts/sideBar/SideBarSection'; 

</script>