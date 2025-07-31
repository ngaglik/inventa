import { Config } from '@/constant/config'

export const CheckBearerExpired = (resp:number) => {
      if(resp===401 || resp===403){
        localStorage.removeItem(Config.TokenName)
        localStorage.removeItem(Config.SessionName)
        console.warn('Token expired or unauthorized. Redirecting to login.')
        // Redirect ke halaman login
        window.location.href = '/'
        return;        
      }      
    }
    
export const fetchSecureData = async () => {
  const token = localStorage.getItem(Config.TokenName);
  const session = localStorage.getItem(Config.SessionName);
  console.log('Token '+Config.TokenName+' found!'+token);
  console.log('Session '+Config.SessonName+' found!'+session);
  if (!token) {
    console.error('No token '+Config.TokenName+"_Token"+' found!');
    return false;
  }

  try {
    const response = await fetch(Config.UrlBackend+'/api/auth/secure', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        uSession: `${session}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch secure data');
      return false;
    }

    const data = await response.text();
    console.log('Secured :', data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};


export const checkLogin = async () => {
  try {
    const success = await fetchSecureData();
    console.log('checkLogin Success value:', success);
    return success;
  } catch (error) {
    console.error('Error fetching secure data:', error);
    return false;
  }
};