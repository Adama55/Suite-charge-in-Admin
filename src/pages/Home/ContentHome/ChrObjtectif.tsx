import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import "./ContentHome.css"

function ChrObjtectif() {

	const location = useLocation()
	return <div className='sl-chrObjtectif gradient-lineare-seconadry'>
		<div className='container d-flex flex-column flex-xxl-row'>
			<div className='text-poppins sl-text-head'>
				Objectifs de
				<span className='text-primary ms-2'>
					Charge-in
				</span>
			</div>
			<div className='sl-tab-link list-unstyled d-flex flex-column flex-xl-row'>
				<div className='d-flex' >
					<li>
						<Link to="firsttrim" className={location.pathname==='/home/firsttrim'?
							'tab_active gradient-lineare-primary h2_regular':
							'tab_inactive h2_regular bg-secondary'}>
								1er trimestre
						</Link>
					</li>
					<li>
						<Link to="secondtrim" className={location.pathname==='/home/secondtrim'?'tab_active gradient-lineare-primary h2_regular':'tab_inactive'}>2ème trimestre</Link>
					</li>
				</div>
				<div className='d-flex'>
					<li>
						<Link to="thirdtrim" 
							className={location.pathname==='/home/thirdtrim'?
								'tab_active gradient-lineare-primary':
								'tab_inactive'}>
							3ème trimestre</Link>
					</li>
					<li>
						<Link to="year2023" className={location.pathname==='/home/year2023'?'tab_active gradient-lineare-primary':'tab_inactive'}>année 2023</Link>	
					</li>
				</div>						
			</div>
		</div>
		<Outlet/>	
	</div>;
}

export default ChrObjtectif;
