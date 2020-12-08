<template>
    <div class="main-content">
        <div>
            <ul>
                <router-link tag="li" :to="item.path" v-for="item in list">
                    {{item.title}}
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default  {
        data() {
            return {
                list:[
                    {
                        path:'/syntax/main',
                        title:'常用语法'
                    },
                    {
                        path:'/syntax/main',
                        title:'常用语法'
                    },
                    {
                        path:'/syntax/main',
                        title:'常用语法'
                    },
                    {
                        path:'/syntax/main',
                        title:'常用语法'
                    }
                ]
            }
        }
    }
</script>
