
export  default {
 replaceTwitterIconUrl (value) {
    return value.replace('_normal', '_200x200')
},
 makeTwitterIconUrl (value) {
    if (value !== null) return `https://twitter.com/i/user/${value}`
    return null
},
    makeTwitterBannerUrl (value) {
    if (value !== null) return `${value}/web_retina`
    return `https://pbs.twimg.com/profile_banners/800415710040076288/1548306383/web_retina`
},
  makeYouTubeUrl (value) {
    if (value !== null) return `https://www.youtube.com/channel/${value}`
    return null
},
  makeSteamUrl (value) {
    if (value !== null) return `http://steamcommunity.com/profiles/${value}`
    return null
},
}