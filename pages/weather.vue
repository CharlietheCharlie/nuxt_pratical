<template>
    <div class="weather">
        <h1>Weather</h1>
        <select v-model="select" @change="search=select" name="locations" id="locations">
            <option disabled selected>請選擇縣市</option>
            <option v-for="location in locations" :value="location.locationName">{{ location.locationName }}</option>
        </select>
        <p>or</p>
        <div>搜尋:<input v-model="search" placeholder="輸入縣市名稱查詢" type="text"></div>
        <div class="locations">
            <div class="location" v-for="location in filteredLocations" v-if="search">
            <div>
                縣市:{{ location.name }}
            </div>
            <div>
                日期:{{ location.date ? location.date.slice(0, 10) : "" }}
            </div>
            <div>
                天氣概況:{{ location.description }}
            </div>
            <div>
                氣溫:{{ location.minT }}&#176;C~
                {{ location.maxT }}&#176;C
            </div>
            <div>
                降雨機率:{{ location.rain }}%
            </div>
        </div>
        </div>
      

    </div>
</template>

<script setup>
const { data } = await useAsyncData("weather", () =>
    $fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-C1F8487C-0546-4FAB-A95D-00078B766486&format=JSON&elementName=')
)
const locations = reactive(data.value.records.location);
const select = ref("請選擇縣市");
const search = ref("");
const filteredLocations = computed(() => {
    const matchedLocations = locations.filter((el) => el.locationName.match(search.value));
    const formatedLocations = [];
    matchedLocations.forEach(location => {
        const formatedLocation = {};
        formatedLocation.name = location.locationName;
        formatedLocation.date = location.weatherElement[0].time[1]["startTime"];
        formatedLocation.description = location.weatherElement[0].time[1]["parameter"]["parameterName"];
        formatedLocation.minT = location.weatherElement[2].time[1]["parameter"]["parameterName"];
        formatedLocation.maxT = location.weatherElement[4].time[1]["parameter"]["parameterName"];
        formatedLocation.rain = location.weatherElement[1].time[1]["parameter"]["parameterName"];
        formatedLocations.push(formatedLocation);
    })
    return formatedLocations;
})

</script>

<style lang="scss" scoped>
.weather {
    width: 50vw;
    margin: 6vw auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    gap: 3vw;

    h1 {
        font-size: 6vw;
        font-family: 'Dancing Script', cursive;
    }

    input {
        border-bottom: 1px solid;
        padding-left: .5vw;
        margin-left: .5vw;
    }

    .locations{
        width:100%;
        display: flex;
        justify-content:space-evenly;
        flex-wrap: wrap;
        gap: 3vw;
        .location{
            width: 40%;
            min-width: 200px;
        }
    }

}
</style>