<template>
  <section class="pt-20 pb-48">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">Here are our heroes</h2>
          <p class="text-lg leading-relaxed m-4 text-blueGray-500">
            According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos, NSIDClead scentist, puts the
            potentially record maximum.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <member-card v-for="profile in profiles"
           :key="profile.twitter.name"
           :name="profile.twitter.name"
           :banner-url="profile.twitter.profile_banner_url | makeTwitterBannerUrl()"
           :twitter-url="profile.twitterId | makeTwitterIconUrl()"
           :steam-url="profile.steamId64 | makeSteamUrl()"
           :youtube-url="profile.youtubeChannelId | makeYouTubeUrl()"
           :thumbnail-url="profile.twitter.profile_image_url_https | replaceTwitterIconUrl()"
           :description="profile.twitter.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { RepositoryFactory } from '@/utils/repositories/repository-factory'
import MemberCard from "@/notus/components/Members/MemberCard";
const membersRepository = RepositoryFactory.get('members')
export default {
  name      : 'Members',
  components: { MemberCard },
  filters   : {
    replaceTwitterIconUrl: function (value) {
      return value.replace('_normal', '_200x200')
    },
    makeTwitterIconUrl: function (value) {
      if (value !== null) return `https://twitter.com/i/user/${value}`
      return null
    },
    makeTwitterBannerUrl: function (value) {
      if (value !== null) return `${value}/600x200`
      return `https://pbs.twimg.com/profile_banners/800415710040076288/1548306383/600x200`
    },
    makeYouTubeUrl: function (value) {
      if (value !== null) return `https://www.youtube.com/channel/${value}`
      return null
    },
    makeSteamUrl: function (value) {
      if (value !== null) return `http://steamcommunity.com/profiles/${value}`
      return null
    },
  },
  data: function () {
    return {
      profiles : null,
      isLoading: false,
    }
  },
  mounted: function () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const { data } = await membersRepository.getMembers()
      this.isLoading = false
      this.profiles  = data
    },
  },
}
</script>

<style scoped>

</style>