type PersonnelUnitsLossesProps = {
    personnelUnitsLosses: number;
    increasePersonnelUnits: number;
}

export const PersonnelUnitsLosses = ({ personnelUnitsLosses, increasePersonnelUnits }: PersonnelUnitsLossesProps) => {
    return (
        <div className="personal-units-losses">
            <span className="personal-units-losses-total text-3xl md:text-[3rem]">{`~${personnelUnitsLosses}`}</span>
            <span className="personal-units-losses-progress">{`+${increasePersonnelUnits}`}</span>
        </div>
    )
}
