import {
  Button,
  Center,
  Paper,
  ScrollArea,
  Space,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core'
import { useState } from 'react'
import ReactModal from 'react-modal'
import { motion, AnimatePresence } from 'framer-motion'
import CardExample from './components/CardExample'
import CardList from './components/CardList'
import './style.css'
import { IssueClosedIcon } from '@primer/octicons-react'

ReactModal.setAppElement('#root')

/**
 * For IOS Animation source
 * @see https://www.youtube.com/watch?v=ELvqt944ch4
 * @see https://github.com/samselikoff/2021-10-21-tailwind-ui-modal-framer-motion/blob/main/pages/index.js
 * @see https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/action-sheet/animations/ios.enter.ts
 */
export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isIOSOpen, setIsIOSOpen] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

  const handleOpenModal2 = () => setIsOpen2(true)
  const handleCloseModal2 = () => setIsOpen2(false)

  const handleOpenModal3 = () => setIsOpen3(true)
  const handleCloseModal3 = () => setIsOpen3(false)

  const handleOpenModal4 = () => setIsOpen4(true)
  const handleCloseModal4 = () => setIsOpen4(false)

  const handleOpenIOS = () => setIsIOSOpen(true)
  const handleCloseIOS = () => setIsIOSOpen(false)

  const [isList, setIsList] = useState(true)

  return (
    <ScrollArea style={{ height: 500 }}>
      <Paper p="xs" shadow="xs" withBorder>
        <Text size="lg" weight="bolder" align="center">
          Modal - Not from scratch
        </Text>
        <Space my="xs" />
        <Center>
          <List
            spacing={5}
            size="sm"
            center
            icon={
              <ThemeIcon color="violet" size={20} radius="xl">
                <IssueClosedIcon size={12} />
              </ThemeIcon>
            }>
            <List.Item>
              Shouldn't dance when clicking the backdrop with fast speed
            </List.Item>
            <List.Item>
              Backdrop isn't suddenly gone when clicking with fast speed
            </List.Item>
          </List>
        </Center>

        <Space my="xs" style={{ height: 150 }} />

        <Text size="lg" align="center">
          Scroll down here...
        </Text>
        <motion.div
          drag
          whileDrag={{ scale: 1.2 }}
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'papayawhip',
            borderRadius: 5,
            margin: '1rem auto',
          }}></motion.div>

        <Space my="xs" style={{ height: 150 }} />

        <Center>
          <Button
            size="xs"
            variant="filled"
            color="violet"
            onClick={handleOpenModal}>
            Open v1
          </Button>
          <Space mx="xs" />
          <Button
            size="xs"
            variant="light"
            color="violet"
            onClick={handleOpenModal2}>
            Open v2
          </Button>
          <Space mx="xs" />
          <Button
            size="xs"
            variant="outline"
            color="violet"
            onClick={handleOpenModal3}>
            Open v3
          </Button>
          <Space mx="xs" />
          <Button
            size="xs"
            variant="subtle"
            color="violet"
            onClick={handleOpenModal4}>
            Open v4
          </Button>
        </Center>

        <Space my="xs" />

        <Center>
          <Button size="xs" variant="default" onClick={handleOpenIOS}>
            IOS Animation
          </Button>
        </Center>

        <Space my="xs" style={{ height: 150 }} />

        {/* React Modal 1 */}
        <ReactModal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          closeTimeoutMS={350}
          contentLabel="Modal Label 1"
          className={{
            base: 'CustomModal__Content',
            afterOpen: 'CustomModal__Content--after-open',
            beforeClose: 'CustomModal__Content--before-close',
          }}
          overlayClassName={{
            base: 'CustomModal__Overlay',
            afterOpen: 'CustomModal__Overlay--after-open',
            beforeClose: 'CustomModal__Overlay--before-close',
          }}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div>
              <h3>Modal 1</h3>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </ReactModal>

        {/* React Modal 2 */}
        <ReactModal
          isOpen={isOpen2}
          onRequestClose={handleCloseModal2}
          closeTimeoutMS={350}
          onAfterClose={handleOpenModal}
          contentLabel="Modal Label 2"
          className={{
            base: 'CustomModal__Content',
            afterOpen: 'CustomModal__Content--after-open',
            beforeClose: 'CustomModal__Content--before-close',
          }}
          overlayClassName={{
            base: 'CustomModal__Overlay',
            afterOpen: 'CustomModal__Overlay--after-open',
            beforeClose: 'CustomModal__Overlay--before-close',
          }}>
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div>
              <h3>Modal 2</h3>
              <button onClick={handleCloseModal2}>Close</button>
            </div>
          </div>
        </ReactModal>

        {/* React Modal 3 */}
        <ReactModal
          isOpen={isOpen3}
          onRequestClose={handleCloseModal3}
          closeTimeoutMS={350}
          contentLabel="Main Modal"
          className="MainModal__Content"
          overlayClassName="MainModal__Overlay">
          <AnimatePresence>
            {isOpen3 && (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.35 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    // transition: { duration: 0.35 },
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 20,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.35,
                    // transition: { duration: 0.2 },
                  }}>
                  <CardExample toggle={handleCloseModal3} />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </ReactModal>

        {/* React Modal IOS Style */}
        <ReactModal
          isOpen={isIOSOpen}
          onRequestClose={handleCloseIOS}
          closeTimeoutMS={300}
          contentLabel="Main Modal"
          overlayElement={(props, contentEl) => {
            return (
              <AnimatePresence>
                {isIOSOpen && (
                  <div
                    {...props}
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 200,
                    }}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.36, 0.66, 0.04, 1],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.36, 0.66, 0.04, 1],
                        },
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, .4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                      }}>
                      {contentEl}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            )
          }}
          contentElement={(props, children) => (
            <div {...props} style={{ overflow: 'hidden' }}>
              {children}
            </div>
          )}>
          <motion.div
            initial={{ y: '100%' }}
            animate={{
              y: 0,
              transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
            }}
            exit={{
              y: '100%',
              transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
            }}
            style={{
              width: 350,
              height: 500,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <CardList toggle={handleCloseIOS} />
          </motion.div>
        </ReactModal>

        {/* React Modal V4 */}
        <ReactModal
          isOpen={isOpen4}
          onRequestClose={handleCloseModal4}
          closeTimeoutMS={300}
          contentLabel="Main Modal"
          overlayElement={(props, contentEl) => {
            return (
              <AnimatePresence>
                {isOpen4 && (
                  <div
                    {...props}
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 200,
                    }}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.36, 0.66, 0.04, 1],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.36, 0.66, 0.04, 1],
                        },
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, .4)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                      }}>
                      {contentEl}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            )
          }}
          contentElement={(props, children) => (
            <div {...props} style={{ overflow: 'hidden' }}>
              {children}
            </div>
          )}>
          <motion.div
            initial={{ y: '100%' }}
            animate={{
              y: 0,
              transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
            }}
            exit={{
              y: '100%',
              transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
            }}
            style={{
              width: 350,
              height: 500,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <AnimatePresence>
              <motion.div
                key={isList ? 'list' : 'card'}
                initial={{
                  y: '100%',
                }}
                animate={{
                  y: 0,
                  // transition: { duration: 1.4, ease: [0.36, 0.66, 0.04, 1] },
                  zIndex: 1,
                }}
                exit={{
                  y: '100%',
                  // transition: { duration: 1.3, ease: [0.36, 0.66, 0.04, 1] },
                  zIndex: 2,
                }}
                transition={{
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 0.3,
                  type: 'tween',
                }}
                style={{
                  minWidth: 350,
                  minHeight: 500,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}>
                {isList ? (
                  <div>
                    <CardList toggle={handleCloseModal4} />
                  </div>
                ) : (
                  <div>
                    <CardExample toggle={handleCloseModal4} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            <Button
              variant="default"
              onClick={() => setIsList(val => !val)}
              style={{ position: 'absolute', zIndex: 3 }}>
              🍓
            </Button>
          </motion.div>
        </ReactModal>
      </Paper>
    </ScrollArea>
  )
}
