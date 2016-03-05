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

    function makeNormalizedTexture( size ){
 
      var data = new Float32Array( SIZE * SIZE  * 4 );

      for( var i =0; i < data.length; i += 4 ){
        if( i != 0 ){

          tv1.set( Math.random() -.5 , Math.random()-.5 , Math.random()-.5);
          tv1.normalize();

        }else{

          tv1.set( 0 , .9999 , 0.01 );
          tv1.normalize();

        }
        data[i+0] =tv1.x;
        data[i+1] =tv1.y;
        data[i+2] =tv1.z;
  
        
        data[i +3 ] = 0;


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

    function makeSingleTexture(size , othersSize ){

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        if( i == 0 ){

          data[ i + 0 ] = 0; 
          data[ i + 1 ] = 0; 
          data[ i + 2 ] = 0; 
          data[ i + 3 ] = .1;
       
        }else{
          data[ i + 0 ] = (Math.random()) * size - size / 2; 
          data[ i + 1 ] = (Math.random()) * size - size / 2; 
          data[ i + 2 ] = (Math.random()) * size - size / 2; 
          data[ i + 3 ] = othersSize;
        }

        //console.log( f.x );

      }

      return makeDataTexture( data );


    }

    function getImageData( image ) {

        var canvas = document.createElement( 'canvas' );
        canvas.width = image.width;
        canvas.height = image.height;

        var context = canvas.getContext( '2d' );
        context.drawImage( image, 0, 0 );

        return context.getImageData( 0, 0, image.width, image.height );

    }

    function getPixel( imagedata, x, y ) {

        var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
        return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };

    }

    function makeImageTexture( sizeofObj , texture ){

      var imagedata = getImageData( texture.image );

      var width = texture.image.width;
      var height = texture.image.height;

      var data = new Float32Array( SIZE * SIZE  * 4 );
      
      for( var i = 0; i < data.length; i += 4 ){

        var pixelPosition = tryForPixel(imagedata, width, height , 0);

        data[ i + 0 ] = pixelPosition.x * sizeofObj; 
        data[ i + 1 ] = pixelPosition.y * sizeofObj; 
        data[ i + 2 ] = 0; 

        data[ i + 3 ] = pixelPosition.l * .00001 * sizeofObj;


      }

      return makeDataTexture( data );


      var color = getPixel( imagedata , 10 , 10 );
    }

    function tryForPixel( imagedata, width, height , timesTried ){

      var x = Math.random();
      var y = Math.random();
      var w = Math.floor( width * x);
      var h = Math.floor( height * y);
      var color = getPixel( imagedata , w , h );
      var l = color.r + color.g + color.b;

      if( l > 10 ){ 
        return { x:x-.5 , y:.5-y , l:l }
      }else{

        if( timesTried < 10 ){
          //console.log( timesTried );
          return tryForPixel( imagedata, width, height, timesTried + 1);
        }else{
          return { x:x-.5 , y:.5-y , l:l }
        }
      }

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
