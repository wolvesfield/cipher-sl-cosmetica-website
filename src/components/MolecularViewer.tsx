import { useEffect, useRef, useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Atom, Play, Pause, ArrowsClockwise } from '@phosphor-icons/react'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface MolecularStructure {
  name: string
  formula: string
  description: { en: string; es: string }
  atoms: Array<{
    element: string
    position: [number, number, number]
    color: string
    size: number
  }>
  bonds: Array<{
    from: number
    to: number
    type: 'single' | 'double' | 'triple'
  }>
}

const molecularStructures: Record<string, MolecularStructure> = {
  cbd: {
    name: 'Cannabidiol (CBD)',
    formula: 'C₂₁H₃₀O₂',
    description: {
      en: 'CBD molecule with pentyl side chain and resorcinol core. The phenolic hydroxyl groups interact with CB1 and CB2 receptors.',
      es: 'Molécula de CBD con cadena lateral pentilo y núcleo de resorcinol. Los grupos hidroxilo fenólicos interactúan con receptores CB1 y CB2.'
    },
    atoms: [
      { element: 'C', position: [0, 0, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [1.5, 0, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [2.25, 1.3, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [1.5, 2.6, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [0, 2.6, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [-0.75, 1.3, 0], color: '#606060', size: 0.7 },
      { element: 'O', position: [-2, 1.3, 0], color: '#FF0000', size: 0.6 },
      { element: 'O', position: [3.5, 1.3, 0], color: '#FF0000', size: 0.6 },
      { element: 'C', position: [2.25, 3.9, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [-0.75, 3.9, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [0.75, 4.8, 0], color: '#606060', size: 0.7 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 1, to: 2, type: 'single' },
      { from: 2, to: 3, type: 'double' },
      { from: 3, to: 4, type: 'single' },
      { from: 4, to: 5, type: 'double' },
      { from: 5, to: 0, type: 'single' },
      { from: 5, to: 6, type: 'single' },
      { from: 2, to: 7, type: 'single' },
      { from: 3, to: 8, type: 'single' },
      { from: 4, to: 9, type: 'single' },
      { from: 8, to: 10, type: 'single' },
      { from: 9, to: 10, type: 'single' },
    ]
  },
  retinol: {
    name: 'Retinol (Vitamin A)',
    formula: 'C₂₀H₃₀O',
    description: {
      en: 'Retinol molecule with conjugated double bond system. Accelerates cellular turnover and stimulates collagen production.',
      es: 'Molécula de retinol con sistema de doble enlace conjugado. Acelera la renovación celular y estimula la producción de colágeno.'
    },
    atoms: [
      { element: 'C', position: [0, 0, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [1.5, 0.5, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [3, 0, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [4.5, 0.5, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [6, 0, 0], color: '#606060', size: 0.7 },
      { element: 'O', position: [7.5, 0.5, 0], color: '#FF0000', size: 0.6 },
      { element: 'C', position: [-1.2, 1, 0.8], color: '#606060', size: 0.7 },
      { element: 'C', position: [-1.2, 1, -0.8], color: '#606060', size: 0.7 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 1, to: 2, type: 'single' },
      { from: 2, to: 3, type: 'double' },
      { from: 3, to: 4, type: 'single' },
      { from: 4, to: 5, type: 'single' },
      { from: 0, to: 6, type: 'single' },
      { from: 0, to: 7, type: 'single' },
    ]
  },
  hyaluronic: {
    name: 'Hyaluronic Acid',
    formula: '(C₁₄H₂₁NO₁₁)ₙ',
    description: {
      en: 'Hyaluronic acid repeating unit. Each molecule can hold up to 1000x its weight in water, creating volumizing hydration.',
      es: 'Unidad repetitiva de ácido hialurónico. Cada molécula puede retener hasta 1000x su peso en agua, creando hidratación voluminizante.'
    },
    atoms: [
      { element: 'C', position: [0, 0, 0], color: '#606060', size: 0.7 },
      { element: 'O', position: [1.5, 0, 0], color: '#FF0000', size: 0.6 },
      { element: 'C', position: [2.5, 1, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [2.5, 2.5, 0], color: '#606060', size: 0.7 },
      { element: 'O', position: [3.8, 3, 0], color: '#FF0000', size: 0.6 },
      { element: 'C', position: [1.2, 3.3, 0], color: '#606060', size: 0.7 },
      { element: 'N', position: [1.2, 4.8, 0], color: '#0000FF', size: 0.65 },
      { element: 'C', position: [-0.2, 2.5, 0], color: '#606060', size: 0.7 },
      { element: 'O', position: [-1.5, 3, 0], color: '#FF0000', size: 0.6 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'single' },
      { from: 1, to: 2, type: 'single' },
      { from: 2, to: 3, type: 'single' },
      { from: 3, to: 4, type: 'single' },
      { from: 3, to: 5, type: 'single' },
      { from: 5, to: 6, type: 'single' },
      { from: 5, to: 7, type: 'single' },
      { from: 7, to: 8, type: 'double' },
      { from: 7, to: 0, type: 'single' },
    ]
  },
  niacinamide: {
    name: 'Niacinamide (Vitamin B3)',
    formula: 'C₆H₆N₂O',
    description: {
      en: 'Niacinamide with pyridine ring and carboxamide group. Regulates sebum, strengthens barrier, and reduces inflammation.',
      es: 'Niacinamida con anillo de piridina y grupo carboxamida. Regula el sebo, fortalece la barrera y reduce la inflamación.'
    },
    atoms: [
      { element: 'C', position: [0, 0, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [1.5, 0, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [2.25, 1.3, 0], color: '#606060', size: 0.7 },
      { element: 'N', position: [1.5, 2.6, 0], color: '#0000FF', size: 0.65 },
      { element: 'C', position: [0, 2.6, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [-0.75, 1.3, 0], color: '#606060', size: 0.7 },
      { element: 'C', position: [-2.25, 1.3, 0], color: '#606060', size: 0.7 },
      { element: 'O', position: [-3, 2.3, 0], color: '#FF0000', size: 0.6 },
      { element: 'N', position: [-2.75, 0, 0], color: '#0000FF', size: 0.65 },
    ],
    bonds: [
      { from: 0, to: 1, type: 'double' },
      { from: 1, to: 2, type: 'single' },
      { from: 2, to: 3, type: 'double' },
      { from: 3, to: 4, type: 'single' },
      { from: 4, to: 5, type: 'double' },
      { from: 5, to: 0, type: 'single' },
      { from: 5, to: 6, type: 'single' },
      { from: 6, to: 7, type: 'double' },
      { from: 6, to: 8, type: 'single' },
    ]
  }
}

interface MolecularViewerProps {
  ingredient: string
  language: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'
}

export function MolecularViewer({ ingredient, language }: MolecularViewerProps) {
  const lt = (obj: Record<string, any> | undefined | null): string => {
    if (!obj) return ''
    return (obj[language] ?? obj['en'] ?? obj['es'] ?? Object.values(obj)[0] ?? '') as string
  }
  const [isOpen, setIsOpen] = useState(false)
  const [isRotating, setIsRotating] = useState(true)
  const canvasRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    molecules: THREE.Group
    animationId?: number
  } | null>(null)

  const moleculeKey = ingredient.toLowerCase().replace(/[^a-z]/g, '')
  const structure = molecularStructures[moleculeKey] || molecularStructures.cbd

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8f9fa)
    
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    canvasRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 10)
    scene.add(directionalLight)

    const molecules = new THREE.Group()

    structure.atoms.forEach((atom, index) => {
      const geometry = new THREE.SphereGeometry(atom.size, 32, 32)
      const material = new THREE.MeshPhongMaterial({ 
        color: atom.color,
        shininess: 80,
        specular: 0x444444
      })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set(...atom.position)
      sphere.userData = { index, element: atom.element }
      molecules.add(sphere)
    })

    structure.bonds.forEach(bond => {
      const fromAtom = structure.atoms[bond.from]
      const toAtom = structure.atoms[bond.to]
      
      const from = new THREE.Vector3(...fromAtom.position)
      const to = new THREE.Vector3(...toAtom.position)
      const direction = new THREE.Vector3().subVectors(to, from)
      const length = direction.length()
      
      const bondGeometry = new THREE.CylinderGeometry(0.1, 0.1, length, 8)
      const bondMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 })
      const bondMesh = new THREE.Mesh(bondGeometry, bondMaterial)
      
      bondMesh.position.copy(from.clone().add(direction.clone().multiplyScalar(0.5)))
      bondMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.clone().normalize()
      )
      
      molecules.add(bondMesh)

      if (bond.type === 'double') {
        const offset = new THREE.Vector3(0.2, 0, 0)
        const bond2 = bondMesh.clone()
        bond2.position.add(offset)
        molecules.add(bond2)
      } else if (bond.type === 'triple') {
        const offset1 = new THREE.Vector3(0.2, 0, 0)
        const offset2 = new THREE.Vector3(-0.2, 0, 0)
        const bond2 = bondMesh.clone()
        const bond3 = bondMesh.clone()
        bond2.position.add(offset1)
        bond3.position.add(offset2)
        molecules.add(bond2)
        molecules.add(bond3)
      }
    })

    const box = new THREE.Box3().setFromObject(molecules)
    const center = box.getCenter(new THREE.Vector3())
    molecules.position.sub(center)

    scene.add(molecules)

    sceneRef.current = { scene, camera, renderer, molecules }

    const animate = () => {
      if (!sceneRef.current) return
      
      if (isRotating) {
        sceneRef.current.molecules.rotation.y += 0.005
        sceneRef.current.molecules.rotation.x += 0.002
      }
      
      sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera)
      sceneRef.current.animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      if (!canvasRef.current || !sceneRef.current) return
      
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      
      sceneRef.current.camera.aspect = width / height
      sceneRef.current.camera.updateProjectionMatrix()
      sceneRef.current.renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId)
      }
      if (sceneRef.current?.renderer) {
        sceneRef.current.renderer.dispose()
        const canvas = canvasRef.current
        const domElement = sceneRef.current.renderer.domElement
        if (canvas && domElement && canvas.contains(domElement)) {
          canvas.removeChild(domElement)
        }
      }
      sceneRef.current = null
    }
  }, [isOpen, structure, isRotating])

  const handleReset = () => {
    if (sceneRef.current) {
      sceneRef.current.molecules.rotation.set(0, 0, 0)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        <Atom size={16} weight="fill" />
        {language === 'en' ? '3D Structure' : 'Estructura 3D'}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-playfair">
                {structure.name}
              </DialogTitle>
              <Badge variant="outline" className="text-lg font-mono">
                {structure.formula}
              </Badge>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            <Card className="p-4 bg-gradient-to-br from-white to-[oklch(0.98_0.003_270)]">
              <p className="text-muted-foreground leading-relaxed">
                {lt(structure.description)}
              </p>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              ref={canvasRef}
              className="w-full h-[500px] rounded-lg border border-border bg-gradient-to-br from-[oklch(0.98_0.003_270)] to-white overflow-hidden"
            />

            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={() => setIsRotating(!isRotating)}
                variant="outline"
                className="gap-2"
              >
                {isRotating ? <Pause size={16} weight="fill" /> : <Play size={16} weight="fill" />}
                {isRotating 
                  ? (language === 'en' ? 'Pause' : 'Pausar')
                  : (language === 'en' ? 'Rotate' : 'Rotar')}
              </Button>

              <Button
                onClick={handleReset}
                variant="outline"
                className="gap-2"
              >
                <ArrowsClockwise size={16} weight="bold" />
                {language === 'en' ? 'Reset View' : 'Reiniciar Vista'}
              </Button>
            </div>

            <Card className="p-4 bg-gradient-to-br from-[oklch(0.98_0.003_270)] to-white">
              <h4 className="font-semibold text-slate-dark mb-3">
                {language === 'en' ? 'Molecular Composition' : 'Composición Molecular'}
              </h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#606060]" />
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Carbon' : 'Carbono'} (C)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#FF0000]" />
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Oxygen' : 'Oxígeno'} (O)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0000FF]" />
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Nitrogen' : 'Nitrógeno'} (N)
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
