import Head from 'next/head';

const Layout = (props)=>{
    return (
        <div id="layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
                <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js" />
            </Head>
            {props.children}
        </div>
    );
}

export default Layout;