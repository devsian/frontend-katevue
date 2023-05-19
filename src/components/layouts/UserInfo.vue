<script setup></script>

<template>
    <div class="md:order-2">
        <div class="flex items-center">
            <div class="mr-2 text-sm font-regular">Halo, Iyan</div>
            <button
                type="button"
                class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
            >
                <span class="sr-only">Open User menu</span>
                <img 
                    class="w-8 h-8"
                    src="../../assets/img/photos.png" alt="user photo" 
                />
            </button>
        </div>
    </div>
</template>
