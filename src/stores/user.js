// 1. Mengimpor dependensi yang diperlukan
import { defineStore } from "pinia";
import axios from "axios";

// 2. Membuat dan mengekspor store dengan menggunakan defineStore
export const useUserStore = defineStore({
    // 3. Menentukan ID untuk store
    id: "user",

    // 4. Mendefinisikan state dalam store
    // state : representasi dari data yang tersimpan dalam suatu aplikasi pada suatu waktu tertentu. State mencerminkan kondisi atau nilai-nilai yang dapat berubah seiring dengan interaksi pengguna atau perubahan lainnya dalam aplikasi.
    state: () => ({
        user: false
    }),

    // 5. Mendefinisikan getters dalam store untuk mendapatkan informasi dari state.
    getters: {
        // 6. Untuk memeriksa apakah pengguna sudah login
        isLoggedIn: (state) => state.user !== false,
        // 7. Untuk mendapatkan data pengguna
        getUser: (state) => state.user
    },

    // 8. Mendefinisikan actions dalam store
    actions: {
        // 9. Menjalankan action untuk mengambil data pengguna dari server
        async fetchUser() {
            try {
                // 10. Melakukan permintaan GET menggunakan axios
                const { data } = await axios.get('http://zullkit-backend.buildwithangga.id/api/user', {
                    // 11. Mengatur header Auth dengan token yang ada di local storage
                    headers: {
                        Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
                    }
                })
                this.user = data
            } catch (error) {
                this.user = false
            }
        }
    }
})