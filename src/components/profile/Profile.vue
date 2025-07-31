<template>
  <n-grid x-gap="12" :cols="3">
    <n-gi>
      <n-card title="Personal" style="max-width: 300px; margin: 0 auto;">
          <div>
            <p><strong>Nama</strong></p>{{ profile.name }}
            <p><strong>JKel / Tanggal Lahir</strong></p>{{ profile.gender }} / {{ profile.birthDate }}
            <p><strong>NIK</strong></p>{{ profile.nationalIdNumber }}
            <p><strong>NIP</strong></p>{{ profile.nationalEmployeeIdNumber }}
            <p><strong>BPJS Kesehatan</strong></p>{{ profile.healthInsuranceIdNumber }}
          </div>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="Kontak" style="max-width: 300px; margin: 0 auto;">
          <div>
            <p><strong>Alamat</strong></p>{{ profile.address }}
            <p><strong>Hp</strong></p>{{ profile.phoneNumber }}
            <p><strong>Email</strong></p>{{ profile.email }}
          </div>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="Kepegawaian" style="max-width: 300px; margin: 0 auto;">
          <div>
            <p><strong>Unit kerja</strong></p>{{ profile.organizationName }}
            <p><strong>Jabatan</strong></p>{{ profile.professionalName }}
            <p><strong>Kelompok Jabatan</strong></p>{{ profile.professionalGroupName }}
            <p><strong>Lokasi</strong></p>{{ profile.locationName }}
          </div>
      </n-card>
    </n-gi>
  </n-grid>
</template>
<script src="./Profile.ts"/>