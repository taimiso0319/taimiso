<template>
    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div class="px-6">
            <img
                alt="..."
                :src="this.thumbnailUrl"
                class="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{{this.name}}</h5>
                <p
                    class="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                >
                    Web Developer
                </p>
                <div class="mt-6">
                    <button
                        class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button
                        class="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <i class="fab fa-facebook-f"></i>
                    </button>
                    <button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <i class="fab fa-dribbble"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MemberCard",
    props:{
      thumbnailUrl: String,
      bannerUrl   : String,
      twitterUrl  : String,
      steamUrl    : String,
      youtubeUrl  : String,
      name        : String,
      description : String,
    }
}
</script>

<style scoped>

</style>
