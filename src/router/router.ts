import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/container/home/Home.vue'
import Asset from '@/components/references/Asset.vue'
import AssetUnit from '@/components/report/AssetUnit.vue'
import AssetUpdate from '@/components/services/AssetUpdate.vue'
import AssetValidate from '@/components/validate/AssetValidate.vue'
import Location from '@/components/references/Location.vue'
import Organization from '@/components/references/Organization.vue'
import Profile from '@/components/profile/Profile.vue'
import ProfileBar from '@/components/ProfileBar.vue'

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},		
		{
			path: '/AssetValidate',
			component: AssetValidate,
		},			
		{
			path: '/AssetUpdate',
			component: AssetUpdate,
		},	
		{
			path: '/AssetUnit',
			component: AssetUnit,
		},	
		{
			path: '/Asset',
			component: Asset,
		},	
		{
			path: '/Profile',
			component: Profile,
		},			
		{
			path: '/ProfileBar',
			component: ProfileBar,
		},		
		{
			path: '/Organization',
			component: Organization,
		},		
		{
			path: '/Location',
			component: Location,
		},
	],
})

export default router
