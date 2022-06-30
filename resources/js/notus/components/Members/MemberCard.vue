<template>
    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-12 mb-12 px-4">
        <div class="px-6">
            <img
                alt="..."
                :src="thumbnailUrl"
                class="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{{name}}</h5>
                <div class="mt-6">
                    <a
                        v-show="twitterUrl"
                        :href="twitterUrl"
                        target="_blank"
                        class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-3 mb-1"
                        type="button"
                    >
                        <i class="fab fa-twitter"></i>
                    </a>
                  <a
                      v-show="steamUrl"
                      :href="steamUrl"
                      target="_blank"
                      class="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                  >
                    <i class="fab fa-steam"></i>
                  </a>
                  <a
                      v-show="youtubeUrl"
                      :href="youtubeUrl"
                      target="_blank"
                      class="bg-red-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-3 mb-1"
                      type="button"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
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

<style scoped lang="scss">
.fab {
  margin-top: 3px;
  text-align: center;
  vertical-align: middle;
}
</style>
