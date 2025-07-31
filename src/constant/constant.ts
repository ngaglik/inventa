export const LAYOUT_ITEMS = [
	
	{
	  label: 'Layanan',
	  key: '/process',
	  children: [	  	
	      {
	        label: 'Pengajuan perubahan',
	        key: '/AssetUpdate',
	      }
    	]
	},
	{
	  label: 'Report',
	  key: '/reports',
	  children: [	  	
	      {
	        label: 'Daftar aset unit kerja',
	        key: '/AssetUnit',
	      }
    	]
	},{
	  label: 'Validasi',
	  key: '/unitAssetValidator',
	  children: [	  	
	      {
	        label: 'Perubahan',
	        key: '/AssetValidate',
	      }
    	]
	},
	{
	  label: 'Referensi',
	  key: '/references',
	  	children: [	  	
	      {
	        label: 'Aset',
	        key: '/asset',
	      },
	      {
	        label: 'Organisasi',
	        key: '/organization',
	      },
	      {
	        label: 'Lokasi',
	        key: 'location',
	      }
    	]
  
	}	
]
