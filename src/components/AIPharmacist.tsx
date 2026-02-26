import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, X, Send, Mic } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useApp } from '@/lib/AppContext'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function AIPharmacist() {
  const { language } = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const handleVoiceInput = () => {
    setIsRecording(!isRecording)
    toast.info(
      language === 'en' 
        ? 'Voice input will be available soon' 
        : 'La entrada de voz estará disponible pronto'
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const promptText = `You are an expert dermatologist and skincare pharmacist. A customer is asking: "${userMessage}". 
      
      Provide a helpful, professional response about skincare concerns, ingredients, or product recommendations. Keep your response concise (2-3 sentences) and mention specific benefits when relevant. Use ${language === 'en' ? 'English' : 'Spanish'} language.`
      
      const prompt = window.spark.llmPrompt([promptText], userMessage)
      const response = await window.spark.llm(prompt, 'gpt-4o-mini')
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: language === 'en'
            ? 'I apologize, but I\'m having trouble responding right now. Please try again.'
            : 'Disculpa, estoy teniendo problemas para responder. Por favor intenta de nuevo.'
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-teal-deep hover:bg-teal-light text-white shadow-lg relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-teal-light"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Sparkles className="w-6 h-6 relative z-10" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] p-0 gap-0">
          <div className="flex flex-col h-[600px]">
            <div className="flex items-center justify-between p-6 border-b bg-secondary/30">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal-deep flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-playfair text-xl font-semibold text-slate-dark">
                    {language === 'en' ? 'AI Pharmacist' : 'Farmacéutico IA'}
                  </h2>
                  <p className="text-sm text-gray-medium">
                    {language === 'en' ? 'Your skincare expert' : 'Tu experto en cuidado de la piel'}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-12 h-12 mx-auto text-teal-deep mb-4" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-dark mb-2">
                    {language === 'en' ? 'How can I help you today?' : '¿Cómo puedo ayudarte hoy?'}
                  </h3>
                  <p className="text-gray-medium">
                    {language === 'en'
                      ? 'Ask me about skincare concerns, ingredients, or product recommendations'
                      : 'Pregúntame sobre preocupaciones de la piel, ingredientes o recomendaciones'}
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === 'user'
                            ? 'bg-teal-deep text-white'
                            : 'bg-secondary text-slate-dark'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-teal-deep rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-teal-deep rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-teal-deep rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    language === 'en'
                      ? 'Ask about skincare...'
                      : 'Pregunta sobre cuidado de la piel...'
                  }
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  size="icon"
                  onClick={handleVoiceInput}
                  className={`transition-all ${
                    isRecording 
                      ? 'bg-destructive hover:bg-destructive/90 animate-pulse' 
                      : 'bg-accent hover:bg-accent/90'
                  } text-white`}
                  disabled={isLoading}
                >
                  <Mic className="w-4 h-4" />
                </Button>
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="bg-teal-deep hover:bg-teal-light text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
