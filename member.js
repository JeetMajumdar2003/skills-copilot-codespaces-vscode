function member(){
    return {
        restrict: 'E',
        templateUrl: 'modu les/ski I Is/ views/member. html',
        controller: 'SkillsMemberControlleri',
        controllerAs:'vm',
        bindToController: true,
        scope: {
        member: '='
        }
    };
}