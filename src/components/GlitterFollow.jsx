import React, { useEffect, useRef } from 'react';

const GlitterFollow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;
    const particles = [];

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Function to generate a random neon color
    const getRandomColor = () => {
      const neonColors = ['#ff00ff', '#00ffff', '#ffff00', '#ff00ff', '#00ff00', '#ff0000'];
      return neonColors[Math.floor(Math.random() * neonColors.length)];
    };

    // Particle class
    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.opacity = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.01;
      }

      draw() {
        context.globalAlpha = this.opacity;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Function to create particles
    const createParticles = (x, y) => {
      for (let i = 0; i < 30; i++) {
        const size = Math.random() * 10 + 5;
        const color = getRandomColor();
        particles.push(new Particle(x, y, size, color));
      }
    };

    // Animation function
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        if (particle.opacity > 0) {
          particle.update();
          particle.draw();
        } else {
          particles.splice(index, 1);
        }
      });
    };

    // Mouse move event listener
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      createParticles(clientX, clientY);
    };

    // Add event listener
    canvas.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    // Cleanup function
    return () => {
      // Remove event listener
      canvas.removeEventListener('mousemove', handleMouseMove);
      // Cancel animation frame
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />;
};

export default GlitterFollow;
