    function makeRandomTexture( size ){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      for( var i =0; i < data.length; i++ ){

        data[i] = (Math.random() - .5 ) * size;
  
        if( i % 4 == 4 ){
          data[i] = 0;
        }


      }

      return makeDataTexture( data );
    }

    function makeGridTexture(size){

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        id = Math.floor( i / 4 );


        z = Math.floor( id / 50 );

        x = (z % 50 ) / 50;
        y = z / 50;

        data[ i + 0 ] = x* .01; 
        data[ i + 1 ] = y* .01; 
        data[ i + 2 ] = z* .01; 

        //console.log( f.x );

      }

      return makeDataTexture( data );


    }

    function makeSingleTexture(size){

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        if( i == 0 ){
          data[ i + 0 ] = 0; 
          data[ i + 1 ] = 0; 
          data[ i + 2 ] = 0; 
       
        }else{


          data[ i + 0 ] = (Math.random()) * size - size; 
          data[ i + 1 ] = (Math.random()) * size - size; 
          data[ i + 2 ] = (Math.random()) * size - size; 
        }

        //console.log( f.x );

      }

      return makeDataTexture( data );


    }
    function makeMeshTexture( geometry ){
  
      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        var randomFace = geometry.faces[ Math.floor( Math.random() * geometry.faces.length)];

        v1 = geometry.vertices[ randomFace.a ];
        v2 = geometry.vertices[ randomFace.b ];
        v3 = geometry.vertices[ randomFace.c ];
        

        var f = randomPositionInTriangle( v1 , v2 , v3 );
        data[ i + 0 ] = f.x; 
        data[ i + 1 ] = f.y; 
        data[ i + 2 ] = f.z; 

        //console.log( f.x );

      }

      return makeDataTexture( data );

    }

    function randomPositionInTriangle( v1 , v2 , v3 ){

      fVec = new THREE.Vector3();

      tv1.copy( v2 );
      tv1.sub( v1 );

      tv2.copy( v3 );
      tv2.sub( v1 );

      fVec.copy( v1 );

      var r = Math.random();
      var s = Math.random();
      
      if((r + s) >= 1){

        r = 1 - r;
        s = 1 - s;

      }

      tv1.multiplyScalar( r );
      tv2.multiplyScalar( s );


      fVec.add( tv1 );
      fVec.add( tv2 );

      return fVec;
    }

    function makeImageTexture( data , size ){

      tryGettingBrighter


    }


    function makeDataTexture( data ){

      var texture = new THREE.DataTexture( 
        data,
        SIZE,
        SIZE,
        THREE.RGBAFormat,
        THREE.FloatType
      );

      texture.minFilter =  THREE.NearestFilter,
      texture.magFilter = THREE.NearestFilter,

      texture.needsUpdate = true;

      return texture;

    }
