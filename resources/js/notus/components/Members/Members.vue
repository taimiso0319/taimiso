<template>
  <section class="pt-20 pb-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold">Here are our players</h2>
          <p class="text-lg leading-relaxed m-4 text-blueGray-500">
            Either playing game together or alone.<br/> We do what we want.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap">
        <member-card v-for="profile in profiles"
           :key="profile.twitter.name"
           :id="profile.id"
           :name="profile.twitter.name"
           :banner-url="twitter.makeTwitterBannerUrl(profile.twitter.profile_banner_url)"
           :twitter-url="twitter.makeTwitterIconUrl(profile.twitterId)"
           :steam-url="twitter.makeSteamUrl(profile.steamId64)"
           :youtube-url="twitter.makeYouTubeUrl(profile.youtubeChannelId)"
           :thumbnail-url="twitter.replaceTwitterIconUrl(profile.twitter.profile_image_url_https)"
           :description="profile.twitter.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { RepositoryFactory } from '@/utils/repositories/repository-factory'
import MemberCard from "@/notus/components/Members/MemberCard";
import twitter from '@/utils/filters/twitter-url-filter';
const membersRepository = RepositoryFactory.get('members')
export default {
  name      : 'Members',
  components: { MemberCard },
  setup(){
    return {
      twitter
    }
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
      const { data } = await membersRepository.getAllMembers()
      this.isLoading = false
      this.profiles  = data
    },
  },
}
</script>

<style scoped>

</style>