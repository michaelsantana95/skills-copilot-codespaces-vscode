function SkillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'SkillsMemberController',
        controllerAS: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
