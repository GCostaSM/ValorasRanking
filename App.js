import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, FlatList,Image } from 'react-native';

export default function App() {

  const [search, setSearch] = useState(false);
  const [ player, setPlayer ] = useState(false)
  let playerSelected = 
  [{
    key:'Capitão Canhamo',
    img:'https://valorantnews.in/wp-content/uploads/2020/07/Sage-is-too-OP-Riot-planning-to-nerf-Sage-in-Valorant-1024x576.jpg',
    id:'13231321123eqqweqw432',
    positionRank:'111.343',
    rank:'Bronze 2',
    historyMatch:[
      { 
        key:1,
        result:'Won',
        team:[
          {
            key:'Capitão Millos',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
          key:'Capitão Mussa',
          img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'Capitão Canhamo',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'VKZeus',
            img:'https://i.redd.it/908v9xzwuus41.png'
          }
        ],
        kill:30,
        death:1,
        assist:2,
        date:'01/08/2020'
      },
      { 
        key:2,
        result:'Loss',
        team:[
          {
            key:'Capitão Millos',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
          key:'Capitão Mussa',
          img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'Capitão Canhamo',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          { 
            key:'VKZeus', 
            img:'https://i.redd.it/908v9xzwuus41.png' 
          } 
        ], 
        kill:12,
        death:4,
        assist:1,
        date:'23/07/2020'
      },
      { 
        key:3,
        result:'Won',
        team:[
          {
            key:'Capitão Millos',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
          key:'Capitão Mussa',
          img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'Capitão Canhamo',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'VKZeus',
            img:'https://i.redd.it/908v9xzwuus41.png'
          }
        ],
        kill:29,
        death:1,
        assist:6,
        date:'28/07/2020',
      }
    ],
  },
  {
    key:'Capitão Millos',
    img:'https://cdn.vox-cdn.com/thumbor/Q7HWdC2wCxexF3whUuX5wB9DegY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19874924/VALORANT_Jett_Red_crop.jpg',
    id:'13231321123eqqweqw432',
    positionRank:'111.343',
    rank:'Bronze 2',
    historyMatch:[
      { 
        key:1,
        result:'Won',
        team:[
          {
            key:'Capitão Millos',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
          key:'Capitão Mussa',
          img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'Capitão Canhamo',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'VKZeus',
            img:'https://i.redd.it/908v9xzwuus41.png'
          }
        ],
        kill:30,
        death:1,
        assist:2,
        date:'01/08/2020'
      },
      { 
        key:2,
        result:'Loss',
        team:[
          {
            key:'Capitão Millos',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
          key:'Capitão Mussa',
          img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'Capitão Canhamo',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          { 
            key:'VKZeus', 
            img:'https://i.redd.it/908v9xzwuus41.png' 
          } 
        ], 
        kill:12,
        death:4,
        assist:1,
        date:'23/07/2020'
      },
      { 
        key:3,
        result:'Won',
        team:[
          {
            key:'Capitão Millos',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
          key:'Capitão Mussa',
          img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'Capitão Canhamo',
            img:'https://i.redd.it/908v9xzwuus41.png'
          },
          {
            key:'VKZeus',
            img:'https://i.redd.it/908v9xzwuus41.png'
          }
        ],
        kill:29,
        death:1,
        assist:6,
        date:'28/07/2020',
      }
    ],
    },
    {
      key:'Capitão Mussa',
      img:'https://xboxplay.games/imagenes/redimensionar2.php?imagen=https://areajugones.sport.es/wp-content/uploads/2020/06/Valorant-Reyna-1.jpg&an=722&al=400',
      id:'13231321123eqqweqw432',
      positionRank:'111.343',
      rank:'Bronze 2',
      historyMatch:[
        { 
          key:1,
          result:'Won',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'VKZeus',
              img:'https://i.redd.it/908v9xzwuus41.png'
            }
          ],
          kill:30,
          death:1,
          assist:2,
          date:'01/08/2020'
        },
        { 
          key:2,
          result:'Loss',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            { 
              key:'VKZeus', 
              img:'https://i.redd.it/908v9xzwuus41.png' 
            } 
          ], 
          kill:12,
          death:4,
          assist:1,
          date:'23/07/2020'
        },
        { 
          key:3,
          result:'Won',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'VKZeus',
              img:'https://i.redd.it/908v9xzwuus41.png'
            }
          ],
          kill:29,
          death:1,
          assist:6,
          date:'28/07/2020',
        }
      ],
    },
    {
      key:'VKZeus',
      img:'https://rtoacademy.com/wp-content/uploads/phoenix-1.png',
      id:'13231321123eqqweqw432',
      positionRank:'111.343',
      rank:'Bronze 2',
      historyMatch:[
        { 
          key:1,
          result:'Won',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'VKZeus',
              img:'https://i.redd.it/908v9xzwuus41.png'
            }
          ],
          kill:30,
          death:1,
          assist:2,
          date:'01/08/2020'
        },
        { 
          key:2,
          result:'Loss',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            { 
              key:'VKZeus', 
              img:'https://i.redd.it/908v9xzwuus41.png' 
            } 
          ], 
          kill:12,
          death:4,
          assist:1,
          date:'23/07/2020'
        },
        { 
          key:3,
          result:'Won',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'VKZeus',
              img:'https://i.redd.it/908v9xzwuus41.png'
            }
          ],
          kill:29,
          death:1,
          assist:6,
          date:'28/07/2020',
        }
      ],
    },
    {
      key:'Kurogiwa',
      img:'https://img.resized.co/dexerto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5kZXhlcnRvLmNvbVxcXC91cGxvYWRzXFxcLzIwMjBcXFwvMDdcXFwvMjkxMTEzMTVcXFwvYWdlbnQta2lsbGpveS1yZXZlYWwtdmFsb3JhbnQuanBnXCIsXCJ3aWR0aFwiOjYyMCxcImhlaWdodFwiOjM0NyxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvaW1hZ2VzLmRleGVydG8uY29tXFxcL3VwbG9hZHNcXFwvMjAxOVxcXC8xMVxcXC8xMTIxNDk0M1xcXC9wbGFjZWhvbGRlci5qcGdcIixcIm9wdGlvbnNcIjp7XCJvdXRwdXRcIjpcIndlYnBcIn19IiwiaGFzaCI6IjAzYmNmMTcyOTQ4ZmMwOWMyZGM3YTc0OGJkNmJmZDQxZGVmYWQzMGEifQ==/valorant-agent-killjoy-revealed-abilities-release-date-more.jpg',
      id:'13231321123eqqweqw432',
      positionRank:'111.343',
      rank:'Bronze 2',
      historyMatch:[
        { 
          key:1,
          result:'Won',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'VKZeus',
              img:'https://i.redd.it/908v9xzwuus41.png'
            }
          ],
          kill:30,
          death:1,
          assist:2,
          date:'01/08/2020'
        },
        { 
          key:2,
          result:'Loss',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            { 
              key:'VKZeus', 
              img:'https://i.redd.it/908v9xzwuus41.png' 
            } 
          ], 
          kill:12,
          death:4,
          assist:1,
          date:'23/07/2020'
        },
        { 
          key:3,
          result:'Won',
          team:[
            {
              key:'Capitão Millos',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
            key:'Capitão Mussa',
            img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'Capitão Canhamo',
              img:'https://i.redd.it/908v9xzwuus41.png'
            },
            {
              key:'VKZeus',
              img:'https://i.redd.it/908v9xzwuus41.png'
            }
          ],
          kill:29,
          death:1,
          assist:6,
          date:'28/07/2020',
        }
      ],
    }
]

  function onClickFindPlayer(){
      let serchReq =  search ? false: true
      setSearch(serchReq)
  }

  function selectPlayer(playerClicked) {
    let selectedUser = {}
    let playerSelectedInfos = playerSelected.map((player)=>{
      if( player.key == playerClicked.key ) selectedUser = player
    })
    console.log(selectedUser)
    setPlayer(selectedUser)
    setSearch(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topInfo}>
        <Text style={{ color: '#fff'}}>ValorasRank</Text>
        <View style={{ flexDirection: 'row',justifyContent:'center', alignItems: 'center', marginTop: '2%'}}>
          <TextInput
            autoCompleteType='username'
            disableFullscreenUI={true}
            style={styles.input}
            keyboardType='default'
            placeholder='Valorant s Name'
            onTouchStart={onClickFindPlayer}
          />
          <Picker
          style={styles.picker}
          >
            <Picker.Item label="BR" value="BR" />
            <Picker.Item label="US" value="US" />
          </Picker>
        </View>
      </View>
      {search && <View style={styles.searchBox}>
        <FlatList
          style={styles.flatList}
          data={players}
          renderItem={({item}) =>{return (
            <View onTouchStart={() => selectPlayer(item)} style={{flexDirection: 'row',marginTop:10}}>
              <Image style={{width:30,height:30}} resizeMode='cover' source={{ uri:  item.img}}/>
              <Text style={styles.item}>{item.key}</Text>
            </View>
          )}}
        />
      </View>
      }
      {!search && player &&
      <View>
        <View style={styles.profileInfo}>
            <Image style={{width:130,height:130}} resizeMode='cover' source={{ uri:  player.img}}/>
            <View style={{padding:13}} >
                <Text style={styles.playerName}>Username: {player.key}</Text>
                <Text style={styles.playerInfos}>{player.rank}</Text>
                <Text style={styles.playerInfos}>Rank: {player.positionRank}</Text>
            </View> 
        </View>
        <View style={styles.viewHistory}>
        <FlatList
            style={styles.flatListHistory}
            data={player.historyMatch}
            renderItem={({item}) =>{return ( 
              <View style={ item.result == 'Won'  ? {backgroundColor:'#46EE55',marginTop:10, borderRadius:5} : {backgroundColor:'#EE4655',marginTop:10, borderRadius:5} }>  
                  <Text style={{padding:5}}>
                    {item.result} 
                  </Text>
                  <Text style={{padding:5}}>
                      Kill: {item.kill} Death: {item.death} Assist: {item.assist} 
                  </Text>
              </View>
            )}}
          />
        </View>
        <StatusBar style="auto" />
      </View>
      }
    </View>
  );
}


let players = [
  {
    key:'Capitão Millos',
    img:'https://i.redd.it/908v9xzwuus41.png'
  },
  {
  key:'Capitão Mussa',
  img:'https://i.redd.it/908v9xzwuus41.png'
  },
  {
    key:'Capitão Canhamo',
    img:'https://i.redd.it/908v9xzwuus41.png'
  },
  {
    key:'VKZeus',
    img:'https://i.redd.it/908v9xzwuus41.png'
  },
  {
    key:'Kurogiwa',
    img:'https://i.redd.it/908v9xzwuus41.png'
  },
]



const colors = {
  Won:'#46EE55',
  loss:'#EE4655',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01111E'
  },
  topInfo:{
    marginTop:'10%',
    alignItems: 'center',
  },
  input:{
    backgroundColor: '#EE4655',
    width:'70%',
    color:'#FFF',
    height:'100%',
    marginTop:'5%'
  },
  picker:{
    width:'22%',
    height:'100%',
    backgroundColor: '#EE4655',
    color:'#FFF',
    marginTop:'5%'
  },
  item: {
    fontSize: 18,
    color:'#FFF',
  },
  flatList:{
    padding: '3%',
    backgroundColor:'#EE4655',
    width:'92%'
  },
  viewHistory:{
    width:'100%',
  },
  flatListHistory:{
    padding: '3%',
  },
  searchBox:{
    marginTop:'4%',
    alignItems: 'center',
  },
  imagePlayers:{
    width:'22%',
    height:'100%',
  },
  profileInfo:{
    marginTop:'4%',
    padding:'4%',
    flexDirection: 'row'
  },
  playerName:{
    width:'80%',
    color:'#FFF',
    fontSize:20
  },
  playerInfos:{
    color:'#FFF',
    fontSize:12
  },
});
