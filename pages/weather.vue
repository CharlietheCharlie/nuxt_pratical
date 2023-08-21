<template>
    <div class="weather">
        <h1>Weather</h1>
        <select v-model="select" @change="search = select" name="locations" id="locations">
            <option disabled selected>請選擇縣市</option>
            <option v-for="location in locations" :value="location.locationName">{{ location.locationName }}</option>
        </select>
        <p>or</p>
        <div>搜尋:<input v-model="search" placeholder="輸入縣市名稱查詢" type="text"></div>
        <div class="locations flex flex-wrap justify-center gap-y-4">
            <div class="location w-full" v-for="location in filteredLocations" v-if="search">
                <a href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="w-full rounded-t-lg h-60  md:h-100 md:w-48 md:m-2 md:rounded"
                        :src="`/${photoSwitch(location.rain)}`" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">縣市:{{ location.name
                        }}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">日期:{{ location.date ?
                            location.date.slice(0, 10) : "" }}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> 天氣概況:{{ location.description }}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> 氣溫:{{ location.minT }}&#176;C~
                            {{ location.maxT }}&#176;C</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> 氣溫:{{ location.minT }}&#176;C~
                            {{ location.maxT }}&#176;C</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> 降雨機率:{{ location.rain }}%</p>
                    </div>
                </a>
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
const photoSwitch = (weather)=>{
    let src ="";
    if(weather>50){
        src="rainy.jpg"
    }else{
        src="sunny.jpg"
    }
    return src;
}

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
        width: 100%;
    }

}
</style>