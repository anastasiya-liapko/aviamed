<template>
    <div class="news">
        <div class="container">
            <router-link 
                :to="{name: 'newsItem', params: { id: post.id }}"
                tag="a"
                class="news-item mb-3"
                v-for="post in posts" 
                style="border: 1px solid red">
                <div v-cloak>{{ post.id }}</div>
            </router-link>
            <br>
            <!-- <button 
                class="publications__btn btn btn_more" 
                :class="[isFinished ? 'finish' : 'load-more']" 
                @click="getPosts()">
                {{ buttonText }}
            </button> -->
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                isFinished: false,
                row: 0, // Record selction position
                rowperpage: 10, // Number of records fetch at a time
                buttonText: 'Все услуги и направления',
                posts: ''
            }
        },
        methods: {
            getPosts() {
                var news = this;
                axios.post('/ajaxfile.php', {
                    row: this.row, 
                    rowperpage: this.rowperpage
                })
                .then(function (response) {
                    
                    if(response.data !== '' ) {

                       // Update rowperpage
                       news.row += news.rowperpage;

                        var len = news.posts.length;
                        if (len > 0) {
                            news.buttonText = "Загрузка ...";
                            setTimeout(function() {
                                news.buttonText = "Ещё услуги и направления";

                                // Loop on data and push in posts
                                for (let i = 0; i < response.data.length; i++){
                                    news.posts.push(response.data[i]); 
                                }
                            }, 500);
                        } else {
                            news.posts = response.data;
                        }

                    } else {
                        news.buttonText = "Записей больше нет.";
                        news.isFinished = true;
                    }
                });
            },
            isVisible(elem) {
                var coords = elem.getBoundingClientRect();
                var windowHeight = document.documentElement.clientHeight;
                var extendedBottom = 2 * windowHeight;
                var bottomVisible = coords.bottom < extendedBottom;
                return bottomVisible;
            },
            showVisible() {
                var elements = document.getElementsByClassName('news-item');
                var secondToLastElement = elements[elements.length - 1];
                if (this.isVisible(secondToLastElement)) {
                    this.getPosts()
                }
            }
        },
        created() {
            window.onscroll = this.showVisible;
            this.getPosts();
        }
    }
</script>

<style lang="sass">
    .news__btn
        display: block
        width: 300px
        height: 40px
        margin: 0 auto
        border: 5px solid lightblue

    .news-item
        display: block
        width: 100%
        height: 200px

    .finish
        display: none
</style>