import React, { useEffect } from 'react';
import blur from '../assets/blur_bg_1.jpeg'
import '../styles/Login.css';

const Login = ({ title }) => {

    useEffect(() => document.title = title, [title])

    return (
        <div className='login'>
            <div className='login__bg'>
                <img className='login__back-bg' src={blur} alt='' />
            </div>
            <div className='login__banner'>
                <svg fill="none" height="40" viewBox="0 0 160 40" width="160" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M58.2511 24.7945C57.2263 28.4204 54.3494 30.7457 50.0141 30.7457C44.4571 30.7457 40.6738 26.9225 40.6738 20.9718C40.6738 14.7842 45.2455 10.3306 51.6694 10.3306C54.231 10.3306 55.9652 10.8822 57.0294 11.2764L57.6205 16.9517L57.2263 17.0306C54.9405 13.4442 52.8516 11.1189 51.1177 11.1189C48.8714 11.1189 47.0582 13.917 47.0582 18.4101C47.0582 24.0851 50.0536 26.2924 53.4821 26.2924C55.3741 26.2924 57.108 25.6224 58.0542 24.6762L58.2511 24.7945Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M74.0866 20.5776C74.0866 14.9812 72.8255 11.0795 70.0271 11.0795C67.1897 11.0795 65.968 14.9812 65.968 20.5776C65.968 26.174 67.2291 29.9968 70.0271 29.9968C72.8255 29.9968 74.0866 26.174 74.0866 20.5776ZM59.4258 20.5776C59.4258 15.0995 64.2338 10.3306 70.0272 10.3306C75.8208 10.3306 80.6289 15.0995 80.6289 20.5776C80.6289 26.0556 75.8208 30.7457 70.0272 30.7457C64.2338 30.7457 59.4258 26.0556 59.4258 20.5776Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M90.751 30.1545H82.514V30.0756C83.1445 28.1444 83.4993 26.5677 83.4993 23.218L83.4598 18.7644C83.4598 15.8483 82.9082 14.1536 81.4893 12.4983V12.4194L89.6473 10.1335V14.0747L89.8052 14.1141C90.869 12.4588 92.9185 10.3305 96.4263 10.3305C99.8943 10.3305 102.338 12.4588 102.338 15.8089V23.1786C102.338 26.5286 102.614 28.1444 103.283 30.0756V30.1545H95.0468V30.0756C95.7168 28.1444 95.9927 26.4497 95.9927 23.2575V16.2031C95.9927 14.5478 95.1648 13.2863 93.2732 13.2863C91.8152 13.2863 90.5537 14.1536 89.8052 15.2174V23.218C89.8052 26.4892 90.1204 28.1444 90.751 30.0756V30.1545Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M106.46 25.2676V11.8284H104.253V11.4736L112.372 6.3894H112.805V10.9611H126.998V11.8284H112.805V25.1098C112.805 27.4745 114.066 28.2234 115.643 28.2234C117.022 28.2234 117.85 27.5929 117.889 27.5534L118.007 27.6718C117.14 29.2087 115.012 30.7456 111.899 30.7456C108.706 30.7456 106.46 29.2087 106.46 25.2676Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M119.868 30.1544V30.0754C120.498 28.1443 120.813 26.5676 120.813 23.2179V18.7642C120.813 15.8482 121 13.4348 119.581 11.7791V11.7006L127.001 10.9591V14.9024C128.656 13.2077 130.587 10.094 133.977 10.3304L133.267 16.9515H133.07C132.085 15.6115 129.957 14.6262 128.971 14.6262C128.38 14.6262 127.711 15.0993 127.159 15.7693V23.2179C127.159 26.4891 127.474 28.1443 128.105 30.0754V30.1544H119.868Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M144.382 26.9227V20.2086C141.623 20.9571 140.086 22.9026 140.086 24.7552C140.086 26.2921 140.993 27.3169 142.727 27.3169C143.357 27.3169 143.948 27.159 144.382 26.9227ZM144.5 27.6716C143.397 29.2874 141.505 30.7454 138.983 30.7454C136.579 30.7454 134.529 28.9965 134.529 26.0664C134.529 21.8097 139.928 20.3266 144.382 19.3808V17.3062C144.382 15.0204 143.397 13.9171 140.598 13.9171C139.062 13.9171 137.249 14.232 135.475 14.9809L135.317 14.7055C137.209 12.4193 140.323 10.3303 144.579 10.3303C148.796 10.3303 150.727 12.4193 150.727 15.4935V25.6221C150.727 26.5679 151.161 27.3958 152.422 27.3958C152.855 27.3958 153.407 27.2774 153.92 26.9227L153.999 27.0801C153.447 28.381 152.067 30.7063 148.717 30.7063C146.313 30.7063 144.855 29.4449 144.5 27.6716Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M111.549 11.661H127.002V10.7244H111.549V11.661Z" fill="#131313" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M20.8107 19.0432H33.3399C33.4819 19.0432 33.5969 18.9281 33.5969 18.7862V18.4019C33.5969 18.2847 33.5176 18.1825 33.404 18.153C27.5285 16.6434 22.9181 12.0599 21.3712 6.19175C21.3413 6.07891 21.2392 6 21.1227 6H20.8107C20.6688 6 20.5537 6.11505 20.5537 6.25701V18.7862C20.5537 18.9281 20.6688 19.0432 20.8107 19.0432Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M20.8107 33.5811H21.195C21.3122 33.5811 21.4147 33.5019 21.4439 33.3883C22.9535 27.5131 27.537 22.9023 33.4055 21.3555C33.5184 21.3256 33.5969 21.2235 33.5969 21.1069V20.795C33.5969 20.6534 33.4819 20.5383 33.3399 20.5383H20.8107C20.6688 20.5383 20.5537 20.6534 20.5537 20.795V33.3241C20.5537 33.4661 20.6688 33.5811 20.8107 33.5811Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M18.4742 33.5815H18.7858C18.9278 33.5815 19.0428 33.4665 19.0428 33.3241V20.7953C19.0428 20.6534 18.9278 20.5383 18.7858 20.5383H6.25701C6.11505 20.5383 6 20.6534 6 20.7953V21.1792C6 21.2968 6.07928 21.399 6.19285 21.4285C12.068 22.9381 16.6788 27.5212 18.2257 33.3898C18.2556 33.5026 18.3573 33.5815 18.4742 33.5815Z" fill="#131313" fill-rule="evenodd"></path>
                <path clip-rule="evenodd" d="M6.25701 19.0432H18.7858C18.9278 19.0432 19.0428 18.9281 19.0428 18.7862V6.25701C19.0428 6.11505 18.9278 6 18.7858 6H18.4019C18.2847 6 18.1822 6.07965 18.153 6.19322C16.643 12.0684 12.0599 16.6792 6.19138 18.2261C6.07854 18.2556 6 18.3577 6 18.4746V18.7862C6 18.9281 6.11505 19.0432 6.25701 19.0432Z" fill="#131313" fill-rule="evenodd"></path>
                </svg>
            </div>

            <div className="login__page">
                <div className="login__container">
                    <div className="login__container-left">
                        <h1 className="login__container-left--title">Welcome back to Contra 👋</h1>
                        <div className='login__container-left--input-cont'>
                            <label>Email address</label>
                            <input 
                                type="text"
                                placeholder='name@email.com' 
                                required
                            />
                        </div>
                        <button className='login__container-left--btn'>Log In</button>
                    </div>
                    <div className="login__container-right">
                        <img src="https://contra.com/static/assets/login@2x.b44e5924.webp" alt="Contra" className="login__container-right--image" />
                    </div>    
                </div>

                <div className='signup__container'>
                    <p className='signup__container-text'>New to Contra? Join our commision-free platform</p>
                    <button className='signup__container-btn'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}


export default Login;
