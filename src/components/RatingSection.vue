<template>
    <div>
      <v-rating
        v-model="rating"
        active-color="yellow-accent-4"
        half-increments
        hover
        size="20"
        class="text-yellow-accent-4"
      />
        <span class="text-subtitle-2 text-grey-lighten-1">
            (75 customer reviews)
        </span>
    </div>
  </template>

<script>
export default {
  data: () => ({
    rating: 3,
  }),
}
</script>