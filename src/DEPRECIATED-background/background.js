import * as THREE from 'three'
import {TweenMax, Power1, Back} from "gsap";
import fragmentShader from './shaders/frag.glsl.js'
import vertexShader from './shaders/vertex.glsl.js'

var canvas, width, height, renderer, scene, camera, loader, dotTexture, radius
var bufferDotsGeom, positions, attributePositions
var shaderMaterial, mouse, dots, sphereGeom, dotsGeom, resizeTm

export function stopAnimation() {
    console.log("stopAnimation")
    TweenMax.ticker.removeEventListener("tick", render);
    window.removeEventListener("resize", () => {
        resizeTm = clearTimeout(resizeTm);
        resizeTm = setTimeout(onResize, 200);
    })
}

export function init () {
    canvas = document.querySelector('#scene')
    width = canvas.offsetWidth
    height = canvas.offsetHeight

    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);

    scene = new THREE.Scene();

    var light = new THREE.HemisphereLight(0xffffff, 0x0C056D, 0.6);
    scene.add(light);

    radius = 5;
    camera = new THREE.PerspectiveCamera(10, width / height, 0.1, 2000);
    camera.position.set(0, 0, 120);

    loader = new THREE.TextureLoader();
    loader.crossOrigin = "Anonymous";
    dotTexture = loader.load('dotTexture.png');
    sphereGeom = new THREE.IcosahedronGeometry(radius, 5);
    dotsGeom = new THREE.Geometry();
    bufferDotsGeom = new THREE.BufferGeometry();
    positions = new Float32Array(sphereGeom.vertices.length * 3);
    for (var i = 0;i<sphereGeom.vertices.length;i++) {
        var vector = sphereGeom.vertices[i];
        animateDot(i, vector);
        dotsGeom.vertices.push(vector);
        vector.toArray(positions, i * 3);
    }

    attributePositions = new THREE.BufferAttribute(positions, 3);

    bufferDotsGeom.addAttribute('position', attributePositions);
    shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
            texture: {
                value: dotTexture
            }
        },
        vertexShader,
        fragmentShader,
        transparent:true
    });

    dots = new THREE.Points(bufferDotsGeom, shaderMaterial);
    scene.add(dots);
    mouse = new THREE.Vector2(0.8, 0.5);

    TweenMax.ticker.addEventListener("tick", render);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", () => {
        resizeTm = clearTimeout(resizeTm);
        resizeTm = setTimeout(onResize, 200);
    })
}

function animateDot(index, vector) {
    TweenMax.to(vector, 4, {
        x: 0,
        z: 0,
        ease:Back.easeOut,
        delay: Math.abs(vector.y/radius) * 2,
        repeat:-1,
        yoyo: true,
        yoyoEase:Back.easeOut,
        onUpdate: () => updateDot(index, vector)
    })
}

function updateDot(index, vector) {
    positions[index*3] = vector.x;
    positions[index*3+2] = vector.z;
}


function render(a) {
    dots.geometry.verticesNeedUpdate = true;
    dots.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}

function onResize() {
    canvas.style.width = '';
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) - 0.5;
    mouse.y = (e.clientY / window.innerHeight) - 0.5;
    TweenMax.to(dots.rotation, 4, {
        x : (mouse.y * Math.PI * 0.5),
        z : (mouse.x * Math.PI * 0.2),
        ease:Power1.easeOut
    });
}
