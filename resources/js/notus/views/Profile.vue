<template>
  <div>
    <navbar/>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            v-bind:style="{ backgroundImage: 'url(' + profile.twitter.profile_banner_url + ')' }"
        >
          <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style="transform: translateZ(0);"
        >
          <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
          >
            <polygon
                class="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                    class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                        v-show="!isLoading"
                        alt="..."
                        :src="profile.twitter.profile_image_url_https"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                    class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                        class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                      connect
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        <div v-show="isLoading">
                          <scale-loader :loading="loading" :color="loaderColor" :height="loaderHeight" :width="width"/>
                        </div>
                        <div v-show="!isLoading">{{ profile.twitter.followers_count }}</div>
                      </span>
                      <span class="text-sm text-blueGray-400">Followers</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        <div v-show="isLoading">
                          <scale-loader :loading="loading" :color="loaderColor" :height="loaderHeight" :width="width"/>
                        </div>
                        <div v-show="!isLoading">{{ profile.twitter.friends_count }}</div>
                      </span>
                      <span class="text-sm text-blueGray-400">Follows</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        <div v-show="isLoading">
                          <scale-loader :loading="loading" :color="loaderColor" :height="loaderHeight" :width="width"/>
                        </div>
                        <div v-show="!isLoading">{{ profile.twitter.statuses_count }}</div>
                      </span>
                      <span class="text-sm text-blueGray-400">Tweets</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                    v-show="!isLoading"
                    class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                  {{ this.profile.twitter.name }}
                </h3>
                <div
                    class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <i
                      class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>
                  {{ this.profile.twitter.location }}
                </div>
                <!--
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i
                      class="fas fa-briefcase mr-2 text-lg text-blueGray-400"
                  ></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                      class="fas fa-university mr-2 text-lg text-blueGray-400"
                  ></i>
                  University of Computer Science
                </div>
                -->
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p v-show="!isLoading" class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {{ this.profile.twitter.description }}
                    </p>
                    <a
                        href="javascript:void(0)"
                        class="font-normal text-emerald-500"
                    >
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component/>
  </div>
</template>
<script>

import Navbar from "@/notus/components/Navbars/NavigationBar.vue";
import FooterComponent from "@/notus/components/Footers/Footer.vue";

import team2 from "static/img/notus/team-2-800x800.jpg";

import {RepositoryFactory} from '@/utils/repositories/repository-factory'
import twitter from '@/utils/filters/twitter-url-filter';

const membersRepository = RepositoryFactory.get('members')
import ScaleLoader from "vue-spinner/src/ScaleLoader"

export default {
  props: {
    id: Number,
    loaderColor: {
      type: String,
      default: '#4b4b4b'
    },
    loaderHeight: {
      type: String,
      default: '10px'
    },
  },
  setup() {
    return {
      twitter
    }
  },
  data() {
    return {
      team2,
      profile: {
        twitterId: String,
        twitter: {
          name: String,
          description: String,
          profile_image_url_https: String,
          profile_banner_url: String,
          followers_count: Number,
          friends_count: Number,
          statuses_count: Number,
          location: String,
        }
      },
      isLoading: false,
    };
  },
  components: {
    Navbar,
    FooterComponent,
    ScaleLoader,
  },
  mounted: function () {
    this.fetch()
  },
  methods: {
    async fetch() {
      this.isLoading = true
      const {data} = await membersRepository.getMember(this.id)
      this.isLoading = false
      this.apply(data)
    },

    apply(data) {
      this.profile.twitterId = data[0].twitterId
      this.profile.twitter.profile_image_url_https = twitter.replaceTwitterIconUrl(data[0].twitter.profile_image_url_https)
      this.profile.twitter.profile_banner_url = twitter.makeTwitterBannerUrl(data[0].twitter.profile_banner_url)
      this.profile.twitter.name = data[0].twitter.name
      this.profile.twitter.location = data[0].twitter.location
      this.profile.twitter.description = data[0].twitter.description
      this.profile.twitter.followers_count = data[0].twitter.followers_count.toLocaleString()
      this.profile.twitter.friends_count = data[0].twitter.friends_count.toLocaleString()
      this.profile.twitter.statuses_count = data[0].twitter.statuses_count.toLocaleString()
    }
  },
};
</script>
