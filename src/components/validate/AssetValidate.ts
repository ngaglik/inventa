import { defineComponent, ref, h } from 'vue'
import { useMessage,useDialog, NButton, NDatePicker } from 'naive-ui'
import { Config } from '@/constant/config'
import { CheckBearerExpired } from '../../secured'

export default defineComponent({
  setup() {
    const dialog = useDialog()
    const message = useMessage()
    const inputSearch = ref('')
    const tableData = ref([])
    const current = ref(1)
    const pageSize = ref(100)
    const total = ref(0)
    const loading = ref(false)

    
    const fetchData = async (page = 1) => {
      const token = localStorage.getItem(Config.TokenName)
      const session = localStorage.getItem(Config.SessionName)
      if (!token) {
        console.error('No token found!')
        return false
      }
      loading.value = true
      const response = await fetch(
        `${Config.UrlBackend}/api/asset/unit/${session}/?page=${page}&pageSize=${pageSize.value}&inputSearch=${inputSearch.value}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            uSession: `${session}`
          }
        }
      )
      CheckBearerExpired(response.status)
      const result = await response.json()
      tableData.value = result.data
      current.value = result.page
      total.value = result.total
      loading.value = false
    }
 
    const handleInputSearch = () => {
      fetchData(current.value)
    }

    const handlePageChange = (page) => {
      current.value = page
      fetchData(page)
    }

    const doValidate = (row: columns) => {
        message.success(`Data updated: ${row.asset_name}`)   
    }

    const columns = [
      {
        title: 'Aksi',
        key: 'actions',
        render(row) {
          return h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              onClick: () => doValidate(row)
            },
            { default: () => 'Validasi' }
          )
        }
      },
      {title: 'Kode barang',key: 'asset_code'},
      {title: 'NUP',key: 'utilization_serial_number'},
      {title: 'Nama Barang',key: 'asset_name'},
      {title: 'Merk',key: 'asset_brand'},
      {title: 'Tipe',key: 'asset_type'},
      {title: 'Tgl Perolehan',key: 'acquisition_date' },
      {title: 'Kondisi',key: 'condition_name' },
      {title: 'Lokasi',key: 'location_name'}
    ]

    // Fetch data once created
    fetchData(current.value)

    return {
      columns,
      tableData,
      current,
      pageSize,
      total,
      loading,
      inputSearch,
      handleInputSearch,
      handlePageChange,

     doValidate
    }
  }
})
