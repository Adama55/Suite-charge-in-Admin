import React from 'react';
import ChrObjtectif from './ContentHome/ChrObjtectif'

import IconEteincel from "../../asset/images/icon/Vector-eteincel.svg"

function Home (){
	return (
		<div className='px-4 pt-6'>
			<h1> 
				<img src={IconEteincel} alt='icon de eteincel' />
				<span className='ms-2'>Tableau de bord</span>				
			</h1>
			<ChrObjtectif/>
			{/*<Outlet/> je l'ai retiré pour que le conte ne soit pas dupulqué */}			
		</div>
	);
}

export default Home;
