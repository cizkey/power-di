import test from 'ava'
import { logger, OutLevel } from '../utils'

test('logger', t => {
    logger.log('')
    logger.info('')
    logger.warn('')
    logger.error('')

    logger.setOutLevel(OutLevel.None)

    logger.log()
    logger.info()
    logger.warn()
    logger.error()

    t.pass()
})