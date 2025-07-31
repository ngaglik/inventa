<template>
  <div>  
        <h3>Pengajuan Perubahan Data</h3>
        <n-space vertical>
          <n-space horizontal>           
            <n-input-group>
              <n-button type="primary">
                Search
              </n-button>
              <n-input :style="{ width: '50%' }" v-model:value="inputSearch" @keydown.enter="handleInputSearch" />
              <n-button type="primary" ghost>
                Search
              </n-button>
            </n-input-group>
          </n-space>
        <n-data-table
          :columns="columns"
          :data="tableData"
          :max-height="700"
        />
        <n-pagination
          v-model:page="current"
          :page-count="Math.ceil(total / pageSize)"
          @update:page="handlePageChange"
        />      
        </n-space>
  </div>
  <n-modal v-model:show="isModalOpen" :title="isEditMode ? 'Edit Data' : 'Tambah Data'" preset="dialog" :style="{ width: '600px' }">
      <n-form :model="formData" label-width="100">        
        <n-form-item label="NUP">
          <n-input v-model:value="formData.utilization_serial_number" />
        </n-form-item>
        <n-form-item label="Nama Barang">
          <n-input v-model:value="formData.asset_name" />
        </n-form-item>
        <n-form-item label="Merk" >
          <n-input v-model:value="formData.asset_brand" />
        </n-form-item>
        <n-form-item label="Kondisi">
         <n-input v-model:value="formData.condition_name" />
        </n-form-item> 
        <n-form-item label="Lokasi">
         <n-input v-model:value="formData.location_name" />
        </n-form-item> 
      </n-form>

      <n-space horizontal>
        <n-button @click="closeModal">Batal</n-button>
        <n-button :loading="loading" type="primary" @click="submitForm">
          {{ isEditMode ? 'Simpan Perubahan' : 'Tambah' }}
        </n-button>
      </n-space>
    </n-modal>
</template>
<script src="./AssetUpdate.ts"/>