import React from "react"
import { Paper } from "material-ui"

import python from "./assets/python.png"
import java from "./assets/java.png"
import js from "./assets/js.png"
import android from "./assets/android.png"

import "./assets/index.scss"
import { TileCardGrid } from "react-tilecard"
import { SDKDetail } from "./sdk-detail"

export const SDKS = props => {

	const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
	let gridWidth = "60vw"
	let wrap = "wrap"

	if (isMobile) {
		gridWidth = "100vw"
		wrap = "wrap-reverse"

	}

	return (<div className={ isMobile ? "mobile" : "standard" }>
           <Paper zDepth={ 0 }
                  className="paper">
             <h1 className="page-header">Faux SDKs</h1>
             <h5 className="tag-line">fake devkits for a fake service...</h5>
             <Paper zDepth={ 0 }
                    style={ { display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" } }>
               <TileCardGrid direction="row"
                             wrap={ wrap }
                             width={ gridWidth }
                             height="auto">
                 <SDKDetail title="Python SDK"
                            avatarSrc={ python }
                            name="python">
                   <p>
                     Install the command line tool ...
                   </p>
                   <div className="code-example">
                     <pre><code>pip install fauxsdk</code></pre>
                   </div>
                 </SDKDetail>
                 <SDKDetail title="JavaScript SDK"
                            avatarSrc={ js }
                            name="javascript">
                   <p>
                     Install the command line tool ...
                   </p>
                   <div className="code-example">
                     <pre><code>npm install fauxsdk</code></pre>
                   </div>
                 </SDKDetail>
                 <SDKDetail title="Android SDK"
                            avatarSrc={ android }
                            name="android">
                   <p>
                     Add the following to your build.gradle file...
                   </p>
                   <div className="code-example">
                     <pre><code>{ `dependencies \{\n\tcompile group "com.faux.sdk", sname: "faux.sdk.android", version:"0.0"\n\}` }</code></pre>
                   </div>
                 </SDKDetail>
                 <SDKDetail title="Java SDK"
                            avatarSrc={ java }
                            name="java">
                   <p>
                     Add the following to your maven dependencies...
                   </p>
                   <div className="code-example">
                     <pre><code>{ `<dependency>\n\t<groupId> com.faux.sdk.java </groupId>\n\t<artifactId> fauxsdkjava </artifactId>\n\t<version> 0.0 </version>\n</dependency>` }</code></pre>
                   </div>
                 </SDKDetail>
               </TileCardGrid>
             </Paper>
           </Paper>
         </div>)
}
