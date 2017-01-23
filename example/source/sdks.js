import React from "react"
import { Paper } from "material-ui"

import python from "./assets/python.png"
import java from "./assets/java.png"
import js from "./assets/js.png"
import android from "./assets/android.png"
import { TileCardGrid } from "react-tilecard"
import { SDKDetail } from "./sdk-detail"

export const SDKS = props => {

	const mobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);
	let gridWidth = mobile ? "auto" : "60vw"
	let wrap = mobile ? "wrap-reverse" : "wrap"
	let justification = mobile ? "center" : "space-around"

	return (<div className={ mobile ? "mobile" : "standard" }>
           <div className="header">
             <h1 className="page-header">FAUX SDKs</h1>
             <h5 className="tag-line">fake devkits for a fake service...</h5>
           </div>
           <Paper zDepth={ 0 }
                  className="paper">
             <TileCardGrid direction="row"
                           wrap={ wrap }
                           width={ gridWidth }
                           alignment="center"
                           justification={ justification }
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
                   <pre><code>{ `dependencies \{\n  compile group "com.faux.sdk", \n  name: "faux.sdk.android", version:"0.0"\n\}` }</code></pre>
                 </div>
               </SDKDetail>
               <SDKDetail title="Java SDK"
                          avatarSrc={ java }
                          name="java">
                 <p>
                   Add the following to your maven dependencies...
                 </p>
                 <div className="code-example">
                   <pre><code>{ `<dependency>\n  <groupId> com.faux.sdk.java </groupId>\n  <artifactId> fauxsdkjava </artifactId>\n  <version> 0.0 </version>\n</dependency>` }</code></pre>
                 </div>
               </SDKDetail>
             </TileCardGrid>
           </Paper>
         </div>)
}
