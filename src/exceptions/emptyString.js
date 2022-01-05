class EmptyString{
    invalidPosition(position) {
        if(!position) throw new Error('Position is a required field. Please make sure you are providing a position.')
    }
}

export default EmptyString