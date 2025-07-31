import { defineComponent, ref } from 'vue'
import { Config } from '@/constant/config'
import { CheckBearerExpired } from '../../secured'

const profile = 
  {
    
  }

export default defineComponent({
  data() {
    return {
      profile,
    }
  },
  methods: {
    async fetchData() {
      const token = localStorage.getItem(Config.TokenName);
      const session = localStorage.getItem(Config.SessionName);
      if (!token) {
        console.error('No token found!');
        return false;
      }
      this.loading = true;
      const response = await fetch(Config.UrlBackend+"/api/person/session/"+Config.AppId+"/"+session, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          uSession: `${session}`,
        },
      });
      CheckBearerExpired(response.status);
      const result = await response.json();
      this.profile = result[0];

      console.log(this.profile)
      this.loading = false;
    },
    
  },
  created() {
    this.fetchData();
  }
})