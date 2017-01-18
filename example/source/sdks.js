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

	return <Paper zDepth={ 0 }
               style={ { width: "100vw", minHeight: "100vh", padding: "15px" } }>
          <h2 className="page-header">Faux SDKs</h2>
          <h5 style={ { marginLeft: "10vw" } }>fake devkit's for a fake service...</h5>
          <div style={ { display: "flex", flexDirection: "column", alignItems: "flex-start" } }>
            <TileCardGrid direction="row"
                          wrap="wrap"
                          width="80vw"
													height="auto">
              <SDKDetail title="Python SDK"
                         avatarSrc={ python }
                         name="python">
                Install the command line tool ...
                <div className="code-example">
                <pre>  pip install fauxsdk </pre>
                </div>
              </SDKDetail>
              <SDKDetail title="Java SDK"
                         avatarSrc={ java }
                         name="java">
                Add the following to your maven dependencies...
                <div className="code-example">
									<code>
											<pre>	&lt;dependency&gt;</pre>
											<pre>  	&lt;groupId&gt;com.faux.sdk.java&lt;&#47;groupId&gt;</pre>
											<pre>			&lt;artifactId&gt;fauxsdkjava&lt;&#47;artifactId&gt;</pre>
											<pre>			&lt;version&gt;0.0&lt;&#47;version&gt;</pre>
											<pre> &lt;&#47;dependency&gt;</pre>
                  </code>
                </div>
              </SDKDetail>
              <SDKDetail title="JavaScript SDK"
                         avatarSrc={ js }
                         name="javascript">
												 Install the command line tool ...
				                 <div className="code-example">
				                  <pre> npm install fauxsdk </pre>
				                 </div>
              </SDKDetail>
              <SDKDetail title="Android SDK"
                         avatarSrc={ android }
                         name="android" >
												 Add the following to your build.gradle file...
													 <div className="code-example">
														<code>
														<pre>	dependencies 	&#123; </pre>
														<pre>	    compile group 'com.faux.sdk', name: "faux.sdk.android", version:'0.0'</pre>
														<pre>	&#125; </pre>
													</code>
												</div>
              </SDKDetail>
            </TileCardGrid>
          </div>
        </Paper>
}
