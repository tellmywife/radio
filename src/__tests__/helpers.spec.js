import { getItem, sortBy, getItemsWithTag, convertTagToPath, convertPathToTag } from '../helpers.js'

const data = [{
      "id": "s306935",
      "description": "The Element West is the first 24/7 West Coast station. Your host DJ Carisma plays nothing but the hottest West Coast hip hop, breaking the artists of tomorrow before you hear them anywhere else.",
      "name": "The Element West",
      "imgUrl": "https://cdn-profiles.tunein.com/s306935/images/logoq.jpg",
      "streamUrl": "http://tunein4.streamguys1.com/elmntfree1",
      "reliability": 64,
      "popularity": 3.0,
      "tags": ["hip hop", "music"]
  }, {
      "id": "s249995",
      "description": "Latin Hits is your source for the hottest chart topping hits of the moment from artists like J Balvin, Shakira and more! Enjoy your all your favorites and discover the freshest sounds of Latin's bright future right here.",
      "name": "Latin Hits",
      "imgUrl": "http://cdn-profiles.tunein.com/s249995/images/logoq.png",
      "streamUrl": "http://tunein4.streamguys1.com/ltnhtfree1?aw_0_1st.age=34&aw_0_1st.gender=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548844301",
      "reliability": 34,
      "popularity": 2.7,
      "tags": ["latin", "pop latino", "music"]
  }, {
      "id": "s34804",
      "name": "KQED",
      "description": "KQED Public Radio, home of Forum with Michael Krasny and The California Report, is the most-listened-to public radio station in the nation and the most-listened-to radio station in the Bay Area, with an award-winning news and public affairs program service.",
      "imgUrl": "https://cdn-radiotime-logos.tunein.com/s34804q.png",
      "streamUrl": "http://50.31.186.115:80/kqedradio.mp3",
      "reliability": 72,
      "popularity": 4.4,
      "tags": ["news", "public radio", "current affairs"]
}]

describe('helpers module', () => {
  describe('getItem', () => {
    test('finds an item', () => {
      const id = "s306935"
      const station = getItem(data, id)
      expect(station.id).toEqual(id)
      expect(station.name).toEqual("The Element West")
    })

    test('NOT finds an item', () => {
      const id = "nonn_exists"
      const station = getItem(data, id)
      expect(station).toEqual(undefined)
    })
  })

  describe('convertTagToPath', () => {
    test('tag without spaces', () => {
      const tag = 'tag'
      expect(convertTagToPath(tag)).toEqual(tag)
    })

    test('tag with spaces', () => {
      const tag = 'tag and tag'
      expect(convertTagToPath(tag)).toEqual('tag-and-tag')
    })

    test('empty tag', () => {
      const tag = ''
      expect(convertTagToPath(tag)).toEqual(tag)
    })
  })

  describe('convertPathToTag', () => {
    test('path without dashes', () => {
      const tag = 'tag'
      expect(convertPathToTag(tag)).toEqual(tag)
    })

    test('tag with dashes', () => {
      const tag = 'tag-and-tag'
      expect(convertPathToTag(tag)).toEqual('tag and tag')
    })
  })

  describe('getItemsWithTag', () => {
    test('finds items with existing tag', () => {
      const tag = "music"
      const stations = getItemsWithTag(data, tag)
      expect(stations.length).toEqual(2)
    })

    test('finds 0 items with NONexisting tag', () => {
      const tag = "notmusic"
      const stations = getItemsWithTag(data, tag)
      expect(stations.length).toEqual(0)
    })

    test('returns empty array for given empty array', () => {
      const tag = "music"
      const stations = getItemsWithTag([], tag)
      expect(stations.length).toEqual(0)
    })
  })

   describe('sortBy', () => {
    test('sorts items by "reliability"', () => {
      const field = "popularity"
      const [first] = sortBy(data, field)
      const { popularity, name } = first
      expect(popularity).toEqual(4.4)
      expect(name).toEqual("KQED")
    })

    test('sorts items by "popularity"', () => {
      const field = "reliability"
      const [first] = sortBy(data, field)
      const { reliability, name } = first
      expect(reliability).toEqual(72)
      expect(name).toEqual("KQED")
    })

    test('order stays the same for NONexisting "field"', () => {
      const field = "field"
      const [first] = sortBy(data, field)
      const { reliability, name } = first
      expect(reliability).toEqual(64)
      expect(name).toEqual("The Element West")
    })
  })
})