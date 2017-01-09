/**
* @Author: Kayla Fitzsimmons <kaylafitzsimmons>
* @Date:   01-08-2017
* @Email:  kayla.fitzsimmons@protonmail.com
* @Project: tile-card
* @Filename: kids.js
* @Last modified by:   kaylafitzsimmons
* @Last modified time: 01-09-2017
* @License: MIT
* @Copyright: 2016-present
*/

import React from "react"
import TileCard from "source/tile-card"
import { Card, CardText, Paper, CardTitle } from "material-ui"
import logo from "source/logo.jpg"
import logoDos from "source/logo-white.png"

const Kids = (props) => {
  const kidsOne = <div className="grid">
                    <Card className="card">
                      <CardTitle>
                        Content
                      </CardTitle>
                      <CardText>
                        Example content
                      </CardText>
                    </Card>
                  </div>
  return <div className="grid">
           <TileCard className="card" headerClassName="card-header" uniqueKey="0" backgroundColor="#00BCD4" title="Example Child One" tileHeight="150px" tileWidth="150px" avatarSrc={ logoDos }
             name="example-child-one" children={ kidsOne } />
           <TileCard className="card" headerClassName="card-header" uniqueKey="0" backgroundColor="#8BC34A" title="Example Child Four" tileHeight="150px" tileWidth="150px"
             avatarSrc={ logoDos } name="example-child-four" children={ <div className="grid">
                                                                          <Card className="card">
                                                                            <CardTitle>
                                                                              Content
                                                                            </CardTitle>
                                                                            <CardText>
                                                                              Example content
                                                                            </CardText>
                                                                          </Card>
                                                                        </div> } />
           <TileCard className="card" headerClassName="card-header" uniqueKey="0" backgroundColor="#8BC34A" title="Example Child Four" tileHeight="150px" tileWidth="150px"
             avatarSrc={ logoDos } name="example-child-four" children={ <div className="grid">
                                                                          <Card className="card">
                                                                            <CardTitle>
                                                                              Content
                                                                            </CardTitle>
                                                                            <CardText>
                                                                              Example content
                                                                            </CardText>
                                                                          </Card>
                                                                        </div> } />
           <TileCard className="card" headerClassName="card-header" uniqueKey="0" backgroundColor="#03A9F4" title="Example Child Three" tileHeight="150px" tileWidth="150px"
             avatarSrc={ logoDos } name="example-child-three" children={ <div className="grid">
                                                                           <Card className="card">
                                                                             <CardTitle>
                                                                               Content
                                                                             </CardTitle>
                                                                             <CardText>
                                                                               Example content
                                                                             </CardText>
                                                                           </Card>
                                                                         </div> } />
           <TileCard className="card" headerClassName="card-header" uniqueKey="1" title="Example Child Two" tileHeight="150px" tileWidth="150px" avatarSrc={ logo }
             name="example-child-two" children={ <div className="grid">
                                                   <Card className="card">
                                                     <CardTitle>
                                                       Other Content
                                                     </CardTitle>
                                                     <CardText>
                                                       Other Example content
                                                     </CardText>
                                                   </Card>
                                                 </div> } />
         </div>
}
export default Kids
